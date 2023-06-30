time = 3
h = Array();
index = 0;
alert("Welcome!");
//D
h[0] = () => document.getElementsByTagName('fieldset')[6].children[0].children[2].children[2].click()
h[1] = () => document.getElementsByClassName('MenuOuter')[0].querySelector("div.MenuTableContainer > table > tbody > tr:nth-child(2) > td:nth-child(1)").dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));
h[2] = () => document.getElementsByClassName('MenuOuter')[1].querySelector("div.MenuTableContainer > table > tbody > tr:nth-child(3) > td").dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));
h[3] = () => document.getElementsByClassName('MenuOuter')[1].querySelector("div.MenuTableContainer > table > tbody > tr:nth-child(3) > td").click()
h[4] = () => document.querySelector("#pagerow > div > div.arfid836870304.ardbnCell_Buscador_HTML > iframe").contentDocument.querySelector("body > table > tbody > tr:nth-child(1) > td:nth-child(3) > a").click()
h[5] = () => document.querySelector("input#WIN_1_rc3id836890033").checked = true; 
h[6] = () => document.querySelector("input#WIN_1_rc3id836890033").click();
h[7] = () => document.querySelector("input#WIN_1_rc3id836890033").dispatchEvent(new Event('change'));
h[8] = () => document.querySelector("#arid_WIN_1_836890034").value = prompt("ticket: ");
h[9] = () => document.querySelector("#arid_WIN_1_836890034").dispatchEvent(new Event('change'));
h[10] = () => document.querySelector("#WIN_1_836890075 > div > a").click()
h[11] = () => document.querySelector("#arid_WIN_1_836890191").value = 'DASFCB/1'
h[12] = () => document.querySelector("#arid_WIN_1_836890191").dispatchEvent(new Event('change'))
h[13] = () => document.querySelector("#WIN_1_836890174").click()
h[14] = () => {if (document.querySelector("a#WIN_2_302180500")) {document.querySelector("a#WIN_2_302180500").click(); throw e}}
h[15] = () => document.querySelector("#WIN_1_836890023").click()

intervalo = setInterval( ()=>
		{
			try{
				h[index]();
				index++;
			} catch(e) {};
	
			if (index >= h.length) {
				index = 0;
				if (!confirm("más tickets por cargar??")) {
					clearInterval(intervalo);
					alert("Listo!");
				}
			}
		}, time * 1000);
function stop_cau() { clearInterval(intervalo); alert("Detenido 😉");}
