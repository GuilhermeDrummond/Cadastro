const firstName = prompt("Qual seu primeiro nome?")
const lastName = prompt("Qual seu sobrenome?")
const studyArea = prompt("Qual sua área de estudo/trabalho?")
const idade = prompt("Sua idade:")

console.log(firstName + lastName)
console.log(studyArea)
console.log(idade)

alert("Aluno cadastrado com sucesso:\n" +
"\nNome Completo: " + firstName + " " + lastName +
"\nCampo de estudo: " + studyArea +
"\nIdade: " + idade)