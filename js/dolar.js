document.addEventListener('DOMContentLoaded', function (evt) {

	const xhr = new XMLHttpRequest();

	xhr.open('GET','https://s3.amazonaws.com/dolartoday/data.json',true);

		xhr.onload = function(){

			if (this.status === 200) {

				/* Procesar inyeccion de los dolares a la página */

				// Obtener el objeto de dolartoday
				const dolar = JSON.parse(this.responseText);

				// Inyectar en el HTML
				document.getElementById('dolar').innerText = `${dolar.USD.dolartoday} Bs.S`;

				console.log(dolar.USD.dolartoday);

			}

			/* Procesar aparicion del spinner */
				appearPage(this.status);

		};

	xhr.send();

});

document.getElementById('showPage').addEventListener('click', function (evt) {
	evt.preventDefault();

	appearPage();

});

function appearPage(status = 'Cargando...') {
	
	document.getElementById('principal').style.display = 'block';

	if(status !== 200)
		document.getElementById('dolar').innerText = `Error al consultar al servidor... "${status}"`;

	document.getElementById('spinner').style.display = 'none';

}