var ytvPlayer = document.getElementById('movie_player') || document.querySelector('.html5-video-player');

var initInterval = setInterval(function () {	
	if (ytvPlayer && typeof ytvPlayer.setPlaybackQualityRange == 'function') {				
		ytvPlayer.setPlaybackQualityRange('highres');		
		clearInterval(initInterval);		
	}
	else {		
		ytvPlayer = document.getElementById('movie_player') || document.querySelector('.html5-video-player');
	}	
}, 250);

document.getElementsByTagName('body')[0].onkeydown = function(e) {	
	if (!ytvPlayer || typeof ytvPlayer.setPlaybackQualityRange != 'function') {	
		return;
	}
	
	if (e.keyCode == 428) {
		ytvPlayer.requestFullscreen();
	}
};