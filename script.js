//exibir no terminal
console.log("ohayo sekai");
//exibir no navegador
document.write("olá navegador!");
//um alerta
alert("alerta de confirmação");
//quarda a o nome do aluno
var nome = window.prompt ("Informe o nome:");
//quarda a nota do aluno
var nota1 = window.prompt("Digite a nota 1:");
// parsefloat transforma o número em um número inteiro, sem especifica-lo o computador entende que é pra soma 5 + 5 em 55 ao inves de chegar em 10
nota1 = parseFloat (nota1);

var nota2 = window.prompt("Digite a nota 2:");
nota2 = parseFloat (nota2);
// prompt quarda os valores
//calculo a média das duas notas
var media = (nota1 + nota2)/2;
//gera a mensagem de exibição do nome e da média do aluno
var mensagem = nome + ", você obteve a média: " + media;
window.alert(mensagem)
