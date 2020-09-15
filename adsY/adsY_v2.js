// javascript:
console.log("adsY.js loading...");

f = async function() {
	if (await document.querySelector("#movie_player").classList.contains("ad-showing")) {
		var video_duration = await document.querySelector(".html5-main-video").getDuration();
		console.log("duration: " + video_duration);
// 		await document.getElementsByTagName('video')[0].pause()
		console.log("pause");
		if (!document.querySelector("#movie_player").classList.contains("var1")){
			await document.querySelector("#movie_player").classList.add("var1");
			await alert('class "ad-showing"');
		}	// fin de incorporación "var1"
		document.querySelector(".html5-main-video").currentTime = video_duration;
		console.log("currentTime set: " + document.querySelector(".html5-main-video").currentTime);
	}
	
    if (await document.querySelector(".ytp-ad-skip-button")) {
		await document.querySelector(".ytp-ad-skip-button-slot").removeAttribute('style');
		await document.querySelector(".ytp-ad-skip-button-slot > span").removeAttribute('style')
//         await document.querySelector(".ytp-ad-skip-button").click()
    } else {
	    if (await document.querySelector(".ytp-ad-text")) {
		    // document.querySelector(".html5-main-video") // para usarse en vez de "#movie_player > div.html5-video-container > video"
		    // document.querySelector("#movie_player > div.html5-video-container > video").currentTime = document.querySelector("#movie_player > div.html5-video-container > video").getDuration() + 1
		    var video_duration = await document.querySelector(".html5-main-video").getDuration()
		    //document.querySelector(".html5-main-video").currentTime = video_duration + 1;
		    
		    await document.querySelector(".ytp-ad-text.ytp-ad-preview-text").addEventListener('click', function() {
			    document.querySelector(".html5-main-video").currentTime = video_duration;
		    });
	    }
    };
	
	// nueva función para reemplazar al que hacía el click
	if (await document.querySelector("button.ytp-ad-button.ytp-ad-button-link.ytp-ad-clickable")) {
		var video_duration = await document.querySelector(".html5-main-video").getDuration();
// 		document.querySelector(".html5-main-video").currentTime = video_duration + 1;
// 		await alert("button.ytp-ad-button.ytp-ad-button-link.ytp-ad-clickable");
		await document.querySelector(".ytp-ad-skip-button-slot").removeAttribute('style');
		await document.querySelector(".ytp-ad-skip-button-slot > span").removeAttribute('style')
	}
	
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
	
	if (await document.querySelector("#cancel-button")) {
		document.querySelector("#cancel-button").click()
	}
};



if (document.querySelector("#country-code") & document.querySelector("ytd-topbar-logo-renderer.ytd-app.style-scope #country-code")) {
	document.querySelector("#country-code").innerHTML = document.querySelector("ytd-topbar-logo-renderer.ytd-app.style-scope #country-code").innerHTML + "<br>no ADS";
}

if (document.querySelector("#logo-icon-container > svg > g > g:nth-child(1)")) {
		// 	https://bennettfeely.com/clippy/
// 	var cruz_negra_polygon = "12.5 0,0 12.5,18.75 31.25,0 50,12.5 62.5,31.25 43.75,50 62.5,62.5 50,43.75 31.25,62.5 12.5,50 0,31.25 18.75"
// 	document.querySelector("#logo-icon-container > svg > g > g:nth-child(1)").innerHTML += '<polygon points="' + cruz_negra_polygon + '"></polygon>';
	pp = document.createElement("polygon");
	pp.setAttribute('points', "12.5 0,0 12.5,18.75 31.25,0 50,12.5 62.5,31.25 43.75,50 62.5,62.5 50,43.75 31.25,62.5 12.5,50 0,31.25 18.75");
	document.querySelector("#logo-icon-container > svg > g > g:nth-child(1)").innerHTML += pp.outerHTML;
}


if (document.querySelector("#movie_player > div.video-ads.ytp-ad-module")) {
	document.querySelector("#movie_player > div.video-ads.ytp-ad-module").addEventListener("DOMSubtreeModified", f);
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
if (document.querySelector("#movie_player")) {
	document.querySelector("#movie_player").addEventListener("DOMSubtreeModified", function() {
		if (document.querySelector("#movie_player > div.video-ads.ytp-ad-module")) {
			document.querySelector("#movie_player > div.video-ads.ytp-ad-module").remove();
		}
	});
}

observador = new MutationObserver(function(mutationsList, observer) {
mutationsList.forEach(mutation => {
	if (!mutation.oldValue.includes("ad-showing") & mutation.target.classList.contains("ad-showing")) {
		var video_duration = document.querySelector(".html5-main-video").getDuration();
		console.log("duration: " + video_duration);
// 		await document.getElementsByTagName('video')[0].pause()
		console.log("pause");
		if (!document.querySelector("#movie_player").classList.contains("var1")){
			 document.querySelector("#movie_player").classList.add("var1");
			 alert('class "ad-showing"');
		}	// fin de incorporación "var1"
		document.querySelector(".html5-main-video").currentTime = video_duration;
		console.log("currentTime set: " + document.querySelector(".html5-main-video").currentTime);
        }
    })
} );
observador.observe(
    document.querySelector("#movie_player"),
    { attributeFilter: ["class"] }
)
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

a1 = setInterval(f, 10000);
console.log("adsY.js loaded !");
f();
console.log("adsY.js executing");
