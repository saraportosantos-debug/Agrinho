function mostrarMensagem() {
    alert(
        "Bem-vindo ao Agro Forte! Juntos construímos um futuro sustentável."
    );
}

function enviarContato() {
    alert(
        "Obrigado pelo interesse! Nossa equipe entrará em contato em breve."
    );
}

function mudarCor() {

    const secao = document.querySelector(".impacto");

    const cores = [
        "#EAD7FF",
        "#D6F1FF",
        "#FFF6C7",
        "#CBEED5"
    ];

    const aleatoria =
        cores[Math.floor(Math.random() * cores.length)];

    secao.style.background = aleatoria;
}