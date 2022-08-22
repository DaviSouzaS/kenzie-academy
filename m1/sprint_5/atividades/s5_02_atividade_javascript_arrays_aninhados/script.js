//🧠 Exercício - Itens para acampar.

let amigo1 = ['Papel higienico','Sabão','Pasta de dente','Fio dental', 'Escova de dentes'] //Higiene

let amigo2 = ['Macarrão instantâneo', 'Frutas', 'Água potável','Carne','Vegetais'] //Alimentação

let amigo3 = ['Gaze','Antibióticos','Alcool','Ataduras','faixas'] //Cuidados médicos

let amigo4 = ['Gerador','Modem portátil', 'Churrasqueira','Cabana','Lanterna'] //Lazer

let caixaDeSuprimentos = [amigo1,amigo2,amigo3,amigo4] //Receber os itens

console.table(caixaDeSuprimentos)

if (amigo1.length < 5  ) {
    console.log('Quantidade errada de itens, amigo 1, pegar mais itens')
}

else if (amigo1.length > 5) {
    console.log('Quantidade errada de itens, amigo 1, devolver itens ')
} 

if (amigo2.length < 5  ) {
    console.log('Quantidade errada de itens, amigo 2, pegar mais itens')
}

else if (amigo2.length > 5) {
    console.log('Quantidade errada de itens, amigo 2, devolver itens ')
} 

if (amigo3.length < 5  ) {
    console.log('Quantidade errada de itens, amigo 3, pegar mais itens')
}

else if (amigo3.length > 5) {
    console.log('Quantidade errada de itens, amigo 3, devolver itens ')
} 

if (amigo4.length < 5  ) {
    console.log('Quantidade errada de itens, amigo 4, pegar mais itens')
}

else if (amigo4.length > 5) {
    console.log('Quantidade errada de itens, amigo 4 ,devolver itens')
} 
