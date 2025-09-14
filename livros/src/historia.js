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


    (function () {
      // Restaura tema salvo
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') document.documentElement.classList.add('dark-mode');

      const btn = document.getElementById('toggle-theme');
      const setIcon = () => {
        btn.textContent = document.documentElement.classList.contains('dark-mode') ? '☀️' : '🌙';
      };
      setIcon();

      btn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark-mode');
        const isDark = document.documentElement.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        setIcon();
      });
    })();
  