const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll(".cartao");

let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartoesSelecionado = document.querySelector(".selecionado");
    cartoesSelecionado.classList.remove("selecionado");
}

function mostarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function (){
    
    if (cartaoAtual === cartoes.length -1){
        cartaoAtual = -1;
    }

    esconderCartaoSelecionado();
    cartaoAtual++;
    mostarCartao(cartaoAtual);
})

btnVoltar.addEventListener("click", function (){

    if(cartaoAtual === 0) {
        cartaoAtual = cartoes.length;
    }
    
    esconderCartaoSelecionado();
    cartaoAtual--;
    mostarCartao(cartaoAtual);
})