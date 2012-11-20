function maiordetres(valor1,valor2,valor3) {
	if (valor1 > valor2 | valor1 > valor3) {
		return valor1;
	} if(valor2 > valor3 | valor2 > valor1) {
		return valor2;
	} if(valor3 > valor1 | valor3 > valor2) {
		return valor3;
	}

}