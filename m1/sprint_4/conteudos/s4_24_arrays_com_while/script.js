let frutas = ['maçã', 'banana', 'laranja'] //Array que será percorrido

let frases = [' estava uma delícia.',' estava velha.',' não estava madura.' //Outro array que será percorrido 
]

let i = 0 //Valor de inicialização (Para não fazer um loop infinito)

while (i < frutas.length) { //Condição (i < frutas.length)

    console.log('A '+ frutas[i] + frases [i]); //Código a ser rodado
    i++; //Código a ser rodado (incremento)
}
