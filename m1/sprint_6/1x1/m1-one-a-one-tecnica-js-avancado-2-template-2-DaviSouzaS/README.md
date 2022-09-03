# Simulado de entrevista técnica

Desenvolva uma função chamada verificaParOuImpar() que recebe dois parâmetros:

-   O primeiro deve ser uma lista de números.
-   O segundo um número.

Sua função deve contar quantas vezes o **número passado por parâmetro** aparece dentro da **lista passada por parâmetro**

Caso a quantidade de vezes que o **número** aparece dentro da lista seja par, deve retornar a seguinte string:

```javascript
"A quantidade de vezes que o valor aparece é par";
```

Caso não seja deve retornar:

```javascript
"A quantidade de vezes que o valor aparece é impar";
```

Exemplo:

```javascript
const lista = [1, 5, 3, 4, 7, 4, 15, 20, 4];
verificaParOuImpar(lista, 4);
// A função deve retornar: "A quantidade de vezes que o valor aparece é impar"
// Pois o número 4 se repete 3 vezes e 3 é um número impar.
```

Similarmente,

```javascript
const lista = [1, 1, 2, 1, 1];
verificaParOuImpar(lista, 1);
// A função deve retornar: "A quantidade de vezes que o valor aparece é par"
// Pois o número 1 se repete 4 vezes e 4 é um número par.
```
