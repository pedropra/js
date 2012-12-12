/* 
*  Implementar uma função soma() 
   que retorna a soma de todos os números 
   em um array passado para a função 
   (ex.: soma([1,2,3,4]) deve retornar 10)
*/

function soma() {
	var value;
	var resultado = 0 ;
	
	for(i=0; i < arguments.length; i++) {
		value = arguments[i];
		resultado += value;
	}
	
	return resultado;
}

soma(1,2,3);