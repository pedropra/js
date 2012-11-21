var vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

function vogal(letra) {
	for(var i=0; i <= vogais.length; i++) {
		if(letra === vogais[i]){
			return  true;			
		} 		
	}
	console.log("O valor não é uma vogal");
}