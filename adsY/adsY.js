javascript: f = function() {
    if (document.querySelector(".ytp-ad-skip-button")) {
        document.querySelector(".ytp-ad-skip-button").click()
    } else { 
	    if (document.querySelector(".ytp-ad-text")) {
		    if !(document.querySelector(".ytp-ad-skip-button")){
			    /* document.querySelector(".html5-main-video") */ // para usarse en vez de "#movie_player > div.html5-video-container > video"
			    // document.querySelector("#movie_player > div.html5-video-container > video").currentTime = document.querySelector("#movie_player > div.html5-video-container > video").getDuration() + 1
			    document.querySelector(".html5-main-video").currentTime = document.querySelector(".html5-main-video").getDuration() + 1;
		    }
	    }
    };
    if (document.querySelector(".ytp-ad-overlay-close-button")) {
        document.querySelector(".ytp-ad-overlay-close-button").click()
    }
    
    if (document.querySelector(".ytp-ad-image-overlay")) {
        document.querySelector(".ytp-ad-image-overlay").remove()	}
		
    if (document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer")) {
        document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").click();
        document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").remove();	}

    if (document.querySelector("#player-ads")) {
        document.querySelector("#player-ads").remove()	}
};
a1 = setInterval(f, 20);


//javascript:f=function(){document.querySelector(".ytp-ad-skip-button")?document.querySelector(".ytp-ad-skip-button").click():document.querySelector(".ytp-ad-text")&&(document.querySelector(".html5-main-video").currentTime=document.querySelector(".html5-main-video").getDuration()+1),document.querySelector(".ytp-ad-overlay-close-button")&&document.querySelector(".ytp-ad-overlay-close-button").click(),document.querySelector(".ytp-ad-image-overlay")&&document.querySelector(".ytp-ad-image-overlay").remove(),document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer")&&(document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").click(),document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").remove()),document.querySelector("#player-ads")&&document.querySelector("#player-ads").remove()},a1=setInterval(f,20);
