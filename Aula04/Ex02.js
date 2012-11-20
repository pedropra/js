function MaiorDeTres(valor1,valor2,valor3) {
	maior = arguments[0];
	for (var i = 1; i < arguments.length ; i++) {
		if (arguments[i] > maior) 
			maior = arguments[i];
	};
	return maior;
}