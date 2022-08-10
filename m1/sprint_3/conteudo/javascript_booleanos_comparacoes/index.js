let x = 3
let y = 6
let z = 4 
let w = '4'

//x == y
//false
//z == w
//true
//z === w
//false
//z != w
//false
//z !== w
//true
//y === x*2
//true
//y/2 === x
//true

let idadePedro = 15
let idadeAna = 20 
let idadeBruna = 18 

let pedroPodeDirigir = idadePedro >= 18; 
console.log(pedroPodeDirigir);
//False

let anaPodeDirigir = idadeAna >= 18;
console.log(anaPodeDirigir);
//True 

let brunaPodeDirigir = idadeBruna >= 18; 
console.log(brunaPodeDirigir);
//True

//VALORES QUE SÃO FALSY 
false;
undefined;
null;
('');
0;
NaN; 

//EXEMPLO 

let stringVazia = ''
//stringVazia == false
//true

let zero = 0 
//zero == false
//true