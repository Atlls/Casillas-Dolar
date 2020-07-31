/** Variables **/
const form = document.querySelector('form');
const tabla = document.querySelector('table');

const btnEnviar = document.querySelector('#btnEnviar');
/** Objetos **/
class Interfaz {

};
/** Event's Listeners's **/

// Cuando envía el formulario...
btnEnviar.addEventListener('click', function (event){
	event.preventDefault();

	/* Variables */
	let coordX = document.querySelector('#coordX').value;
	let coordY = document.querySelector('#coordY').value;

	// Minuscula a Mayuscula
	coordY = coordY.toUpperCase();
	console.log(coordX);

	if(valInput(coordY, coordX)){
		/* Enviar por consola las coordenadas */
		console.log(coordX, coordY);

		/* Acceder al elemento enviado */
		let casilla = document.getElementById(`${coordY}`);

		// Mueve hasta coordX veces...
		for (var i = 0; i < coordX; i++) {
			casilla = casilla.nextElementSibling;
 		}

 		pushPoint(casilla);
	} else {
		console.log('entrada ivalida');
	}

	

});

// Cuando da click a una de las casillas
tabla.addEventListener('click', function(evt){

	if(evt.target.nodeName === 'TD' && evt.target.id === ''){
		
		pushPoint(evt.target);

	}
	
});

/** Funciones **/

// Coloca los puntos en las casillas...
function pushPoint (casilla) {

	let points = casilla.getAttribute('points');

	if(points < 2) {
		points++;
		casilla.innerHTML += `
		<i class="tiny material-icons">lens</i>
		`;
	} else {
		points = 0;
		casilla.innerHTML = null;
	}

	casilla.setAttribute('points', points);

}

function valInput (letra, numero) {

	let boolNum = false, 
		boolLet = false;

	if(numero != '')
		if(numero > 0 || numero <= 5)
			boolNum = true;

	if(letra === 'A' || letra === 'B' || letra === 'C' || letra === 'D' || letra === 'E')
		boolLet = true;

	return boolNum && boolLet;

}