/*  
* Primeira aula de JS do Pablito
*/

var nome  = "Pedro";
var idade = 25;
var sexo = "m";
var bebida = "Cerveja"

var s ="";


s = s + "Olá meu nome é ";
s = s + nome ;
s = s + ", tenho ";
s = s + idade;
s = s + " anos e sou do sexo ";
if (sexo === "m") {
	s = s + "Masculino";
} else  {
	s = s + "Feminino";
}
s = s + " e gosto de: "
s = s + bebida;
s = s + ".";

console.log(s);


