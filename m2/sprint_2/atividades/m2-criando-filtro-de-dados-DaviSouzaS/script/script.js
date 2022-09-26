//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
const filterCountry = data.filter((dado) => {return dado.country === 'Brasil'})

console.log(filterCountry);

// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.

const filterPrice = data.filter((preco) => {return preco.price >= 200})

console.log(filterPrice);

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
const filterIsOpen = data.filter((disponivel) => {return disponivel.isOpen === true})

console.log(filterIsOpen);

//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).

const filterHotelName = data.filter((nome) => {return nome.name === 'Copacabana Palace'})

console.log(filterHotelName)

console.log(filterHotelName[0].toBook)
const filterToBook = filterHotelName[0].toBook.filter((vaga) => {return vaga.isAvaliable === true})


console.log(filterToBook);
