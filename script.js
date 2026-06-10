const textoInfo = document.getElementById("texto-info");

const textos = {

    sustentabilidade: `
A sustentabilidade no agronegócio representa o equilíbrio entre
produção agrícola, preservação ambiental e responsabilidade social.
Práticas sustentáveis reduzem impactos ambientais, preservam recursos
naturais e garantem maior eficiência produtiva. Além disso, fortalecem
a economia rural e contribuem para um futuro mais seguro para as
próximas gerações.
`,

    tecnologia: `
A tecnologia está transformando o campo através da agricultura de
precisão, sensores inteligentes e monitoramento em tempo real.
Essas ferramentas permitem maior controle sobre a produção,
reduzem desperdícios e aumentam a produtividade. O uso de dados
e inovação torna o agronegócio mais competitivo, eficiente e sustentável.
`,

    futuro: `
O futuro do agronegócio está diretamente ligado à inovação e à
preservação dos recursos naturais. Novas tecnologias, energias
renováveis e sistemas produtivos inteligentes contribuirão para
alimentar uma população crescente sem comprometer o meio ambiente.
Assim, o agro continuará sendo um dos pilares do desenvolvimento sustentável.
`
};

const botoes = document.querySelectorAll(".btn");

botoes.forEach(botao => {

    botao.addEventListener("mouseover", () => {

        const tema = botao.dataset.texto;

        textoInfo.style.opacity = "0";

        setTimeout(() => {
            textoInfo.textContent = textos[tema];
            textoInfo.style.opacity = "1";
        }, 200);

    });

});