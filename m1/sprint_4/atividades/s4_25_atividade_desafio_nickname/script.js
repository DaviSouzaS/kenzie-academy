//Criar função adicionarNickname, que recebe como parâmetro nickname

    //O nickname(parâmetro) deve ter ao menos uma letra maiúscula

    //Se não houver letra maiúscula retornar "Formato inválido" 

//verificar se o nickname já está cadastrado

//Se já estiver, retornar "Nickname já cadastrado"

//SE não estiver cadastrado, a função deve verificar se o nickname tem pelomenos 11 caracteres 

//Se tiver pelomenos 11 caracteres, inserir na lista e retornar "nickname inserido com sucesso"

//criar uma segunda função que retorne a lista de nicknames e a quantidade de nicknames cadastrados até o momento 

let nicknamesCadastrados = ['Adamastor111']

function adicionarNickname (nickname) {

    
    for (let i = 0; i < nickname.length; i++) {

       // if (nickname[i])//colocar de alguma forma uma condição que se não tiver letra maiuscula no nick retorna 'formato inválido' 
       // {
          //  return 'Formato inválido'
       // } 
    }

    for (let i = 0; i < nicknamesCadastrados.length; i++) {
        console.log(i)
        
        if (nicknamesCadastrados[i] == nickname) {
            return 'Nickname já cadastrado'
        }

        if (nickname.length >= 11) {
            nicknamesCadastrados.push(nickname)
            return 'Nickname inserido com sucesso'
        }
        else {
            return 'Nickname abaixo de 11 caracteres'
        }
    }
}

console.log(adicionarNickname('Jorge102030'))

console.log(nicknamesCadastrados)


function verificarNicknames (listaNicknames) {
    return `Essa é a lista de Nicknames cadastrados:${listaNicknames}. Existem ${listaNicknames.length} cadastrados`
}

console.log(verificarNicknames(nicknamesCadastrados))

