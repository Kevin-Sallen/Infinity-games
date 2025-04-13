const listaSelecaoPersonagens = document.querySelectorAll(".personagem");

listaSelecaoPersonagens.forEach(personagem => {
    personagem.addEventListener("click", () => {
        esconderCartaoPersonagem();

        const idPersonagemSelecionado = mostrarCartaoPersonagemSelecionado(personagem);

        desativarPersonagemNaListagem();
        ativarPersonagemSelecionadoNaListagem(idPersonagemSelecionado);

    })
})


function ativarPersonagemSelecionadoNaListagem(idPersonagemSelecionado) {
    const personagemSelecionadoNaListagem = document.getElementById(idPersonagemSelecionado);
    personagemSelecionadoNaListagem.classList.add("ativo");
}

function desativarPersonagemNaListagem() {
    const personagemAtivoNaListagem = document.querySelector(".ativo");
    personagemAtivoNaListagem.classList.remove("ativo");
}

function mostrarCartaoPersonagemSelecionado(personagem) {
    const idPersonagemSelecionado = personagem.attributes.id.value;
    const idDoCartaoPersonagemParaAbrir = "cartao-" + idPersonagemSelecionado;
    const cartaoPersonagemParaAbrir = document.getElementById(idDoCartaoPersonagemParaAbrir);
    cartaoPersonagemParaAbrir.classList.add("aberto");
    return idPersonagemSelecionado;
}

function esconderCartaoPersonagem() {
    const cartaoPersonagemAberto = document.querySelector(".aberto");
    cartaoPersonagemAberto.classList.remove("aberto");
}

