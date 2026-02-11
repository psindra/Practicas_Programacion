document.getElementById("ht-btn").addEventListener('click', function(){
	chrome.tabs.create({ url: chrome.runtime.getURL("help.html") });
}, false);
document.getElementById("dn-btn").addEventListener('click', function(){
	chrome.tabs.create({ url: "https://www.paypal.com/donate?hosted_button_id=N7L5KNK4S3A2W" })	
}, false);