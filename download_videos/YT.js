window.open(JSON.parse(JSON.stringify(ytInitialPlayerResponse)).streamingData.formats.pop().url);
for(elemento of ytInitialPlayerResponse.streamingData.formats)
{
  console.log(elemento.quality+" "+elemento.mimeType+"\t"+elemento.url);
}
console.log("////\t  OTROS FORMATOS:\t//////");
for(elemento of ytInitialPlayerResponse.streamingData.adaptiveFormats)
{
  console.log(elemento.quality+" "+elemento.mimeType+"\t"+elemento.url);
}

// EL RESTO DEL CÓDIGO VIEJO ----
