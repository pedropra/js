/* 
	O Jodo do PIM
	Utiliza o for para fazer o incremento, 
	usa o IF junto com o modulo para ver se a divisão gera 0 de resto.
	Imprime PIN se for verdade se não imprime o Valor.

*/

for (var i = 0; i <= 100; i++) {
	if (i % 3 === 0 ) {
		console.log('Pin ' + i );
	} else {
		console.log(i);	
	}
};