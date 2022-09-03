// capturando o paragrafo no html
const paragrafo = document.getElementById('meuParagrafo');

// capturando o botão no html
const botao = document.getElementById('meuBotao');

// capturando o segundo botão no html
const outroBotao = document.getElementById('meuOutroBotao');

//Quando ciclo no botão, a class 'escondido' some. 
botao.addEventListener('click', function(){
    paragrafo.classList.remove('escondido');
});

//Quando eu clico no outro botão, a class 'escondido' é adicionada denovo 
outroBotao.addEventListener('click', function(){
    paragrafo.classList.add('escondido');
});


//OUTRO EXEMPLO


const button = document.querySelector('.botaosoma');
const p = document.querySelector('.contador');

let cont = 0

button.addEventListener('click',function (){ 
    cont++
    p.innerText = cont
});