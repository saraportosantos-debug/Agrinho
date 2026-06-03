// Animação ao rolar a página
const elementos = document.querySelectorAll(".fade");

function revelar() {
    elementos.forEach((elemento) => {
        const topo = elemento.getBoundingClientRect().top;

        if (topo < window.innerHeight - 100) {
            elemento.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revelar);
revelar();


// Contadores animados
function contador(id, valorFinal, velocidade) {

    let valorAtual = 0;
    const incremento = valorFinal / 100;

    const intervalo = setInterval(() => {

        valorAtual += incremento;

        if (valorAtual >= valorFinal) {
            valorAtual = valorFinal;
            clearInterval(intervalo);
        }

        document.getElementById(id).textContent =
            Math.floor(valorAtual) + "%";

    }, velocidade);
}

contador("n1", 80, 20);
contador("n2", 95, 20);
contador("n3", 90, 20);