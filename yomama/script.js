/* Yomama JS */

/*Função que identifica que a celula foi clicada*/

/*function clickCelula() {
	var celula = document.getElementsByName("celula");
	console.log(celula.id);
}
*/
/* Yomama JS */

/*Função que identifica que a celula foi clicada*/

function clickCelula(event) {
	var celulaClicada = event.target; // retorna o alvo do evento (no caso a célula clicada)
	
	if (estaVazia(celulaClicada)) {
		return;
	}
	
	if (ehVez("X")) {
		preenche(celulaClicada, "X");
	} else {
		preenche(celulaClicada, "O");
	}
	
	if (verificarVencedor()) {
		aacbarJogo();
	} else {
		trocarVez();
	}
}


function estaVazia(celula) {
	// return true ou false
}

function ehVez(jogador) {
	// return true ou false
}

function preenche(celula, jogador) {
	// preencher a celula de algum jeito
}

function verificarVencedor() {
	// return true ou false
}

function acabarJogo() {
	// anunciar vencedor e resetar o jogo
}

function trocarVez() {
	// efetua a troca da vez do jogador de X para O e viceversa
}
