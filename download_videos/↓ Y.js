window.open(JSON.parse(JSON.stringify(ytplayer)).config.args.raw_player_response.streamingData.formats.pop().url);
for(elemento of ytplayer.config.args.raw_player_response.streamingData.formats)
{
  console.log(elemento.quality+" "+elemento.mimeType+"\t"+elemento.url);
}
console.log("////\t  OTROS FORMATOS:\t//////");
for(elemento of ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats)
{
  console.log(elemento.quality+" "+elemento.mimeType+"\t"+elemento.url);
}

// EL RESTO DEL CÓDIGO VIEJO ----
