let nomeAluno = prompt('Digite o nome do aluno')

if (nomeAluno.length < 5) {
    alert('Nome inválido, atualize a página!')
   }

let presenca = parseInt(prompt('Digite a presença do aluno'))

if (presenca > 10 || presenca < 0 || presenca == 0) {
    alert('Valor inválido para presença, atualize a página!')
}

let materia1 = prompt('Digite a matéria')
let nota1 = parseFloat(prompt(`Digite a nota de ${materia1}`))

if (nota1 == 0 || nota1 > 10 || nota1 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia2 = prompt('Digite a matéria') 
let nota2 = parseFloat(prompt(`Digite a nota de ${materia2}`))

if (nota2 == 0 || nota2 > 10 || nota2 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia3 = prompt('Digite a matéria')
let nota3 = parseFloat(prompt(`Digite a nota de ${materia3}`))

if (nota3 == 0 || nota3 > 10 || nota3 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia4 = prompt('Digite a matéria')
let nota4 = parseFloat(prompt(`Digite a nota de ${materia4}`))

if (nota4 == 0 || nota4 > 10 || nota4 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia5 = prompt('Digite a matéria')
let nota5 = parseFloat(prompt(`Digite a nota de ${materia5}`))

if (nota5 == 0 || nota5 > 10 || nota5 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia6 = prompt('Digite a matéria')
let nota6 = parseFloat(prompt(`Digite a nota de ${materia6}`))

if (nota6 == 0 || nota6 > 10 || nota6 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia7 = prompt('Digite a matéria')
let nota7 = parseFloat(prompt(`Digite a nota de ${materia7}`))

if (nota7 == 0 || nota7 > 10 || nota7 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia8 = prompt('Digite a matéria')
let nota8 = parseFloat(prompt(`Digite a nota de ${materia8}`))

if (nota8 == 0 || nota8 > 10 || nota8 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia9 = prompt('Digite a matéria')
let nota9 = parseFloat(prompt(`Digite a nota de ${materia9}`))

if (nota9 == 0 || nota9 > 10 || nota9 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let materia10 = prompt('Digite a matéria')
let nota10 = parseFloat(prompt(`Digite a nota de ${materia10}`))

if (nota10 == 0 || nota10 > 10 || nota10 < 0 ) {
    alert('Valor inválio para nota, atualize a página!')
}

let somaNota = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10
let mediaNota = somaNota/10

if (mediaNota >= 8 && presenca >= 6) {
    alert(`A nota do aluno ${nomeAluno} é de ${mediaNota} e sua presença de ${presenca}: Aluno aprovado!`)
}
else {
    alert(`A nota do aluno ${nomeAluno} é de ${mediaNota} e sua presença de ${presenca}: Aluno reprovado!`)
}





