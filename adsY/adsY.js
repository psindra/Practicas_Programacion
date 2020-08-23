javascript: f = async function() {
    if (await document.querySelector(".ytp-ad-skip-button")) {
        await document.querySelector(".ytp-ad-skip-button").click()
    } else { 
	    if (await document.querySelector(".ytp-ad-text")) {
		    /* document.querySelector(".html5-main-video") */ // para usarse en vez de "#movie_player > div.html5-video-container > video"
		    // document.querySelector("#movie_player > div.html5-video-container > video").currentTime = document.querySelector("#movie_player > div.html5-video-container > video").getDuration() + 1
		    var video_duration = await document.querySelector(".html5-main-video").getDuration()
		    //document.querySelector(".html5-main-video").currentTime = video_duration + 1;
	    }
    };
    if (await document.querySelector(".ytp-ad-overlay-close-button")) {
        await document.querySelector(".ytp-ad-overlay-close-button").click()
    }
    
    if (await document.querySelector(".ytp-ad-image-overlay")) {
        await document.querySelector(".ytp-ad-image-overlay").remove()	}
		
    if (await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer")) {
        await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").click();
        await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").remove();	}

    if (await document.querySelector("#player-ads")) {
        await document.querySelector("#player-ads").remove();
    }

    if (await document.querySelector("#masthead-ad")) {
        await document.querySelector("#masthead-ad").remove();
    }
	//var1 = await setTimeout(f,20);
};


if (document.querySelector("#movie_player > div.video-ads.ytp-ad-module")) {
	document.querySelector("#movie_player > div.video-ads.ytp-ad-module").addEventListener("DOMSubtreeModified", f);
}

if (document.querySelector("#country-code")) {
	document.querySelector("#country-code").innerHTML = document.querySelector("#header > ytd-topbar-logo-renderer > span").innerHTML + "<br>no ADS";
}


a1 = setInterval(f, 10000);
f();
