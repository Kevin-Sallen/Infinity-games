const listaSelecaoHistorias = document.querySelectorAll(".historia");

listaSelecaoHistorias.forEach(historia => {
    historia.addEventListener("click", () => {
        esconderCapituloHistoria();

        const idHistoriaSelecionado = mostrarCapituloHistoriaSelecionado(historia);

        desativarHistoriaNaListagem();
        ativarHistoriaSelecionadoNaListagem(idHistoriaSelecionado);

    })
})


function ativarHistoriaSelecionadoNaListagem(idHistoriaSelecionado) {
    const historiaSelecionadoNaListagem = document.getElementById(idHistoriaSelecionado);
    historiaSelecionadoNaListagem.classList.add("ativo");
}

function desativarHistoriaNaListagem() {
    const historiaAtivoNaListagem = document.querySelector(".ativo");
    historiaAtivoNaListagem.classList.remove("ativo");
}

function mostrarCapituloHistoriaSelecionado(historia) {
    const idHistoriaSelecionado = historia.attributes.id.value;
    const idDoCapituloHistoriaParaAbrir = "capitulo-" + idHistoriaSelecionado;
    const capituloHistoriaParaAbrir = document.getElementById(idDoCapituloHistoriaParaAbrir);
    capituloHistoriaParaAbrir.classList.add("aberto");
    return idHistoriaSelecionado;
}

function esconderCapituloHistoria() {
    const capituloHistoriaAberto = document.querySelector(".aberto");
    capituloHistoriaAberto.classList.remove("aberto");
}

