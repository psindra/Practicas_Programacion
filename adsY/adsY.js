// javascript:
var VERSION = "v2.1.13"

console.log("adsY.js loading..." + " " + VERSION);

let contadores_YT = {
	'.contains("ad-showing")': 0,
	'".ad-showing > .html5-video-container > .html5-main-video") .duration == .currentTime': 0,
	'".ytp-ad-timed-pie-countdown-container"': 0,
	'".ytp-ad-skip-button").click()':0,
	'".ytp-ad-skip-button"': 0,
	'".ytp-ad-skip-button-slot"': 0,
	'".ytp-ad-text"': 0,
	'".ytp-ad-text.ytp-ad-preview-text"': 0,
	'"#movie_player > div.video-ads.ytp-ad-module > div.ytp-ad-overlay-slot"': 0,
	'"#confirm-button.style-scope.yt-confirm-dialog-renderer"': 0,
	'"#player-ads"': 0,
	'"#masthead-ad"': 0,
	'"#masthead-ad" 2': 0,
	'"#cancel-button.yt-confirm-dialog-renderer"': 0,
	'"#country-code"': 0,
	"f()": 0
}
contadores_YT = JSON.parse(localStorage.getItem("contadores_YT"));

f = async function() {
	if (await document.querySelector("#movie_player").classList.contains("ad-showing")) {
		contadores_YT[`.contains("ad-showing")`] +=1;
		const video_duration = await document.querySelector(".ad-showing > .html5-video-container > .html5-main-video").duration;
		console.log('"ad-showing" duration: ' + video_duration);

		// // 		await document.getElementsByTagName('video')[0].pause()
		// // // 		console.log("pause");
		// 		if (!document.querySelector("#movie_player").classList.contains("adsY_flag_"+ VERSION)){
			// 			await document.querySelector("#movie_player").classList.add("adsY_flag_"+ VERSION);
			// 			await alert('class "ad-showing"');
			// 		}	// fin de incorporación >> "adsY_flag_"+ VERSION <<
		//
		document.querySelector(".ad-showing > .html5-video-container > .html5-main-video").currentTime = video_duration ||
		document.querySelector(".ad-showing > .html5-video-container > .html5-main-video").duration;
		// console.log("currentTime set: " + document.querySelector(".ad-showing > .html5-video-container > .html5-main-video").currentTime);
		/** */ if (document.querySelector(".ad-showing > .html5-video-container > .html5-main-video").currentTime == document.querySelector(".ad-showing > .html5-video-container > .html5-main-video").duration){
			contadores_YT['".ad-showing > .html5-video-container > .html5-main-video") .duration == .currentTime'] +=1;
		}
		
	}
	
	if (await document.querySelector(".ytp-ad-timed-pie-countdown-container")) {
		contadores_YT['".ytp-ad-timed-pie-countdown-container"'] +=1;
		try {
			await document.querySelector(".ytp-ad-skip-button").click();
			contadores_YT['".ytp-ad-skip-button").click()'] +=1;
		}
			catch(e){};		
	}
	
    if (await document.querySelector(".ytp-ad-skip-button")) {
		contadores_YT['".ytp-ad-skip-button"'] +=1;
		await document.querySelector(".ytp-ad-skip-button-slot").removeAttribute('style');
		await document.querySelector(".ytp-ad-skip-button-slot > span").removeAttribute('style')
		/** */if(document.querySelector(".ytp-ad-skip-button-slot")){
			contadores_YT['".ytp-ad-skip-button-slot"'] +=1;
		}
//         await document.querySelector(".ytp-ad-skip-button").click()
    } else {
	    if (await document.querySelector(".ytp-ad-text")) {
			contadores_YT['".ytp-ad-text"'] +=1;
		    // document.querySelector(".html5-main-video") // para usarse en vez de "#movie_player > div.html5-video-container > video"
		    // document.querySelector("#movie_player > div.html5-video-container > video").currentTime = document.querySelector("#movie_player > div.html5-video-container > video").getDuration() + 1
		    var video_duration = await document.querySelector(".html5-main-video").duration;
		    //document.querySelector(".html5-main-video").currentTime = video_duration + 1;
		    
		    await document.querySelector(".ytp-ad-text.ytp-ad-preview-text").addEventListener('click', function() {
				document.querySelector(".html5-main-video").currentTime = video_duration;    
				contadores_YT['".ytp-ad-text.ytp-ad-preview-text".clicked'] +=1;
		    });
	    }
    };
	
// 	// nueva función para reemplazar al que hacía el click
// 	if (await document.querySelector("button.ytp-ad-button.ytp-ad-button-link.ytp-ad-clickable")) {
// 		var video_duration = await document.querySelector(".html5-main-video").duration;
// // 		document.querySelector(".html5-main-video").currentTime = video_duration + 1;
// // 		await alert("button.ytp-ad-button.ytp-ad-button-link.ytp-ad-clickable");
// 		await document.querySelector(".ytp-ad-skip-button-slot").removeAttribute('style');
// 		await document.querySelector(".ytp-ad-skip-button-slot > span").removeAttribute('style')
// 	}
	
    
	//////////////////////////////////////////////////////////////////
// 	await document.querySelector("#movie_player > div.video-ads.ytp-ad-module")?.remove()
// 	document.querySelector(".ytp-ad-overlay-slot")?.remove()
	document.querySelector("#movie_player > div.video-ads.ytp-ad-module > div.ytp-ad-overlay-slot")?.remove();
	/** */ document.querySelector("#movie_player > div.video-ads.ytp-ad-module > div.ytp-ad-overlay-slot")? 
		contadores_YT['"#movie_player > div.video-ads.ytp-ad-module > div.ytp-ad-overlay-slot"'] +=1 : null;
	
	
// 	if (await document.querySelector(".ytp-ad-overlay-close-button")) {
//         await document.querySelector(".ytp-ad-overlay-close-button").click()
//     }
    
//     if (await document.querySelector(".ytp-ad-image-overlay")) {
//         await document.querySelector(".ytp-ad-image-overlay").remove()	}
		
    if (await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer")) {
        await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").click();
        await document.querySelector("#confirm-button.style-scope.yt-confirm-dialog-renderer").remove();
		contadores_YT['"#confirm-button.style-scope.yt-confirm-dialog-renderer"'] +=1;
	}
	
	document.querySelector("#player-ads")?.remove();
	/** */ document.querySelector("#player-ads")?
		contadores_YT['"#player-ads"'] +=1 : null;
// 	if (await document.querySelector("#player-ads")) {
//         await document.querySelector("#player-ads").remove();
//     }

	document.querySelector("#masthead-ad")?.remove();
	/** */ document.querySelector("#masthead-ad")?
		contadores_YT['"#masthead-ad"'] +=1 : null;
		//     if (await document.querySelector("#masthead-ad")) {
			//         await document.querySelector("#masthead-ad").remove();
			//     }
			document.querySelector("#masthead-ad")?.remove();
			/** */ document.querySelector("#masthead-ad")?
			contadores_YT['"#masthead-ad" 2'] +=1 : null;
			
			
			//////////////////////////////////////////////////////////////////
			// // 	PROBAMOS COMENTANDO ESTE CLICK PARA VER SI DEJA DE HACER CLICK A CADA RATO ✅
			// 	document.querySelector("#cancel-button")?.click()
			// 	if (await document.querySelector("#cancel-button")) {
// 		document.querySelector("#cancel-button").click()
// 	}	// ✅
// 	


// 	PROBAMOS BOTON Y CLASE PARA EL OK DE "CONTINUAR REPRODUCIENDO":
document.querySelector("#cancel-button.yt-confirm-dialog-renderer")?.click();
/** */ document.querySelector("#cancel-button.yt-confirm-dialog-renderer")?
	contadores_YT['"#cancel-button.yt-confirm-dialog-renderer"'] +=1 : null;
	
	
	contadores_YT["f()"] += 1;
	new Promise(resolve=>{
		localStorage.setItem("contadores_YT", JSON.stringify(contadores_YT));
		resolve();		
	})
};	// final función f()



if (document.querySelector("#country-code") && document.querySelector("ytd-topbar-logo-renderer.ytd-app.style-scope #country-code")) {
	document.querySelector("#country-code").innerHTML = document.querySelector("ytd-topbar-logo-renderer.ytd-app.style-scope #country-code").innerHTML
		+ "<br>no ADS" + " " + VERSION;
	document.querySelector("#country-code").parentElement.style.width = "143px"
	contadores_YT['"#country-code"'] +=1;
}

if (document.querySelector("#logo-icon > svg > g > g:nth-child(1)")) {
// 		// 	https://bennettfeely.com/clippy/
// // 	var cruz_negra_polygon = "12.5 0,0 12.5,18.75 31.25,0 50,12.5 62.5,31.25 43.75,50 62.5,62.5 50,43.75 31.25,62.5 12.5,50 0,31.25 18.75"
// // 	document.querySelector("#logo-icon-container > svg > g > g:nth-child(1)").innerHTML += '<polygon points="' + cruz_negra_polygon + '"></polygon>';
// 	pp = document.createElement("polygon");
// 	pp.setAttribute('points', "12.5 0,0 12.5,18.75 31.25,0 50,12.5 62.5,31.25 43.75,50 62.5,62.5 50,43.75 31.25,62.5 12.5,50 0,31.25 18.75");
// 	document.querySelector("#logo-icon > svg > g > g:nth-child(1)").innerHTML += pp.outerHTML;
	
	
	ss = document.createElement("svg");
	ss.setAttribute('viewBox', '106 -4 70 70')
	ss.setAttribute('class', 'style-scope yt-icon')
	ss.toggleAttribute('preserveAspectRatio', true)
	pp = document.createElement("polygon");
	pp.setAttribute('points', "12.5 0,0 12.5,18.75 31.25,0 50,12.5 62.5,31.25 43.75,50 62.5,62.5 50,43.75 31.25,62.5 12.5,50 0,31.25 18.75");
	pp.setAttribute('fill', 'SpringGreen');
	ss.appendChild(pp);
	document.querySelector("#logo-icon > svg > g > g:nth-child(1)").innerHTML += ss.outerHTML;
	
	document.querySelector("#logo-icon > svg > g > g:nth-child(1) > path:nth-child(2)").setAttribute("fill","black");
}


if (document.querySelector("#movie_player > div.video-ads.ytp-ad-module")) {
	document.querySelector("#movie_player > div.video-ads.ytp-ad-module").addEventListener("DOMSubtreeModified", f);
}
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// observador = new MutationObserver(function(mutationsList, observer) {
// mutationsList.forEach(mutation => {
//         if (mutation.attributeName === 'class') {
//             f();
//         }
//     })
// } );
// observador..observe(
//     document.getElementById('main'),
//     { attributeFilter: ["class"] }
// )
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

a1 = setInterval(f, 20000);
console.log("adsY.js loaded !");
f();

if (!document.querySelector("#movie_player").classList.contains("adsY_flag_"+ VERSION)){
	document.querySelector("#movie_player").classList.add("adsY_flag_"+ VERSION);
	alert("adsY.js executing" + " " + VERSION);
}	// fin de incorporación >> "adsY_flag_"+ VERSION <<

console.log("adsY.js executing" + " " + VERSION);
