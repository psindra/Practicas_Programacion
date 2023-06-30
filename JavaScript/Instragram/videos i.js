const aa = document.createElement('a');
const aa_listener = document.querySelector('#react-root').addEventListener('DOMSubtreeModified',() => {
  try{
    const aa_insert = document.querySelector('#react-root').insertAdjacentElement('beforebegin',aa);
     } catch {};
  try {
    aa.href = document.getElementsByTagName('video')[0].children[0].src;
    aa.innerHTML = '<br><h1>Descargar Video Instagram</h1><br>';
    aa.target = '_blank';
    aa.style.color = 'yellow';
    aa.style.textAlign = 'center';
    aa.download = '';
      } catch { aa.remove(); };
  try {
    for(video of document.getElementsByTagName('video'))
    {
      video.controlsList.remove('nodownload');
    }
  } catch{};
});
