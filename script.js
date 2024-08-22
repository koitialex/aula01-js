console.log("ohayo sekai");
//exibir no navegador
document.write("olá navegador!");
//um alerta
alert("alerta de confirmação");
//quarda a o nome do aluno
var nome1 = window.prompt("Informe o nome:");
//quarda a nota do aluno
var nota1 = window.prompt("Digite a nota 1:");
nota1 = parseFloat(nota1);

var nota2 = window.prompt("Digite a nota 2:");
nota2 = parseFloat(nota2);

var nota3 = window.prompt("Digite a nota 3:");
nota3 = parseFloat(nota3);

var nota4 = window.prompt("Digite a nota 4:");
nota4 = parseFloat(nota4);

var media1 = (nota1 + nota2 + nota3 + nota4) / 4;

var nome2 = window.prompt("informe outro aluno");

var nota5 = window.prompt("Digite a nota 1:");
nota5 = parseFloat(nota5);

var nota6 = window.prompt("Digite a nota 2:");
nota6 = parseFloat(nota6);

var nota7 = window.prompt("Digite a nota 3:");
nota7 = parseFloat(nota7);

var nota8 = window.prompt("Digite a nota 4:");
nota8 = parseFloat(nota8);

var media2 = (nota5 + nota6 + nota7 + nota8) / 4;


var mensagem = nome1 + " obteve a média " + media1 + " e " + nome2 + " obteve a média " + media2;
window.alert(mensagem)

