var active = true;
chrome.webRequest.onHeadersReceived.addListener(
	function(response){
		// alert(details.responseHeaders);
		/* var headers=details.responseHeaders; */
		const headers=response.responseHeaders;
		if (active)
		{
			const attachmentHeader = headers.find(header=>{
				// console.log (header.name.toLowerCase() == "content-disposition");
				return header.name.toLowerCase() == "content-disposition";
			});
			
			if (attachmentHeader) {
				console.log("%cHeadersReceived: ", 'background-color: blue');
				console.log(JSON.parse(JSON.stringify(response)));

				console.log("before: " + attachmentHeader.value);
				attachmentHeader.value = attachmentHeader.value.replace("attachment", "inline");
				console.log("after: " + attachmentHeader.value);


				// const contentTypeHeader = headers.find(header=>{
				// 	if (header.name.toLowerCase() == "content-type"){
				// 		return header.name.toLowerCase().includes("application/octet-stream") || header.name.toLowerCase().includes("application/x-download") ||
				// 		header.name.toLowerCase().includes("application/xml");
				// 	}
				// });
				
				// if (contentTypeHeader) {
				// 	console.log(JSON.stringify(response));
				// }
				
				const contentTypeHeader = headers.find(header=>{
					console.log("%c" + header.name.toLowerCase() == "content-type", 'backgound-color: red');
					return (header.name.toLowerCase() == "content-type");
				});

				console.log("before: " + contentTypeHeader.value);
				// contentTypeHeader.value = contentTypeHeader.value.replace("application/octet-stream", "text/plain");
				contentTypeHeader.value = contentTypeHeader.value.replace("application/octet-stream", "application/pdf");
				// contentTypeHeader.value = contentTypeHeader.value.replace("application/x-download", "text/plain");
				contentTypeHeader.value = contentTypeHeader.value.replace("application/x-download", "application/pdf");				
				contentTypeHeader.value = contentTypeHeader.value.replace("application/xml", "text/xml");

				console.log("after: " + contentTypeHeader.value);

				console.log("%cLuego: ", 'background-color: green');
				console.log(headers);
			}
			
			
		}
		return {responseHeaders: headers};
	},
	{
		urls: ['<all_urls>'],
		types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
	},
	['extraHeaders', 'blocking', 'responseHeaders']
);

function loadOptions(callback)
{
	chrome.storage.local.get('activeStatus', function(data) {
		if (data.activeStatus === undefined) //at first install
		{
			data.activeStatus = true;
			saveOptions();
		}
		active = data.activeStatus;
		if (callback != null)
			callback();
	});
}

function saveOptions()
{
	chrome.storage.local.set({ activeStatus: active });
}

function updateUI()
{
	var str = active? "Undisposition active, click to deactivate": "Undisposition disabled, click to activate";
	chrome.browserAction.setTitle({title:str});
	chrome.browserAction.setBadgeText({text:active?"Act":"Dis"});
	chrome.browserAction.setBadgeBackgroundColor({color:active?"#5084ee":"#e91e63"});
}

function ToggleActive()
{
	active = !active;
	saveOptions();
	updateUI();
}

loadOptions(updateUI);
chrome.browserAction.onClicked.addListener(ToggleActive);
