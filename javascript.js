let nota01 = parseFloat(prompt("Digite a nota 1: "));
let nota02 = parseFloat(prompt("Digite a nota 2: "));
let media = (nota01 + nota02) / 2;

if (media >= 7){
    alert("Sua média foi: " + media + ", Status: Aprovado");
}else{
    alert("Sua média foi: " + media + ", Status: Reprovado");
}