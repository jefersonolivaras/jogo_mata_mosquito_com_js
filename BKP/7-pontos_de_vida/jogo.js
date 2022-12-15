//Dimensão
var altura = 0
var largura = 0

var vidas = 1

function ajustaDimensao(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(largura, altura)
}

ajustaDimensao()

//Posição randômica
function posicaoRandomica(){

    //Remover o mosquito anterior (caso exista)
    if (document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        if(vidas > 3){
            alert('Game over')
        } else {
            document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'
            vidas++

        }

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //elemento html
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosca.png'
    mosquito.className = tamanhoRandomico() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    mosquito.onclick = function(){
        this.remove()
    }

    document.body.appendChild(mosquito)
}

//Tamanho randômico
function tamanhoRandomico(){
    var classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

//Orientação da imagem
function ladoAleatorio(){

    var classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }   
}