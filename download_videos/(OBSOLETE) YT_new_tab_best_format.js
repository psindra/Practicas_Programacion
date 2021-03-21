// JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop().url
// window.open(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop().url)

// video: 
javascript:console.log("URL: " + JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).slice(JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).indexOf("http"),JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).lastIndexOf('","mimeType')
 ));window.open(JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).slice(JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).indexOf("http"),JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).lastIndexOf('","mimeType'))
 );


// // audio:
// javascript:console.log("URL: " + JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).slice(JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).indexOf("http"),JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).lastIndexOf('","mimeType')
//  ));window.open(JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).slice(JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).indexOf("http"),JSON.stringify(JSON.parse( ytplayer.config.args.player_response).streamingData.formats.pop()).lastIndexOf('","mimeType'))
//  );
