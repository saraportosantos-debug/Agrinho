const texto = document.getElementById("texto");

const informacoes = {

sustentabilidade: `
A sustentabilidade no agronegócio é fundamental para garantir que os recursos naturais continuem disponíveis para as futuras gerações.
A adoção de práticas responsáveis reduz impactos ambientais e aumenta a eficiência produtiva.
O uso consciente do solo, da água e da energia fortalece toda a cadeia agrícola.
Além disso, contribui para a preservação da biodiversidade e para o desenvolvimento econômico.
Dessa forma, produção e preservação caminham juntas em benefício da sociedade.
`,

tecnologia: `
A tecnologia revolucionou a forma como os produtores gerenciam suas propriedades rurais.
Com drones, sensores, GPS e softwares inteligentes é possível monitorar plantações em tempo real.
Essas ferramentas ajudam a reduzir desperdícios e melhorar a produtividade.
A agricultura de precisão permite decisões mais rápidas e eficientes.
O resultado é uma produção mais sustentável e competitiva no mercado.
`,

futuro: `
O futuro do agronegócio será cada vez mais conectado à inovação e à sustentabilidade.
Novas tecnologias permitirão produzir mais alimentos utilizando menos recursos naturais.
A integração entre inteligência artificial e agricultura já é uma realidade crescente.
O setor continuará sendo essencial para a economia e para a segurança alimentar.
Investir em inovação significa construir um futuro mais forte e equilibrado.
`,

economia: `
O agronegócio desempenha papel fundamental no crescimento econômico do país.
Milhões de empregos são gerados direta e indiretamente pelo setor.
O desenvolvimento das áreas rurais fortalece comunidades e impulsiona o comércio.
Investimentos em infraestrutura e tecnologia aumentam a competitividade dos produtores.
Assim, o agro se mantém como um dos principais motores da economia nacional.
`

};

document.querySelectorAll(".btn").forEach(botao => {

    botao.addEventListener("mouseenter", () => {

        const tema = botao.dataset.info;

        texto.style.opacity = 0;

        setTimeout(() => {

            texto.innerText = informacoes[tema];

            texto.style.opacity = 1;

        }, 200);

    });

});