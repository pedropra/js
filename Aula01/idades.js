/*Verificador de idades*/

var idade1;
var idade2;

idade1 = 25;
idade2 = 21;

var maior;

if (idade1 > idade2 ) {
	maior = idade1;
} else {
	maior = idade2;
}
var conta;
conta = (maior/2)+7;

var menor;

if (idade1 < idade2) {
	menor = idade1;
} else {
	menor = idade2;
}

var resultado;
if ( menor < conta ) {
	resultado = "Não pode";
} else {
	resultado = "Pode sim";
}
console.log (resultado);