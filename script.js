// Botão "Saiba Mais" rola para a seção sobre
document.getElementById('learnMoreBtn').addEventListener('click', () => {
    document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
});

// Validação simples do formulário e mensagem
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const formMessage = document.getElementById('formMessage');

    if(nome && email && mensagem){
        formMessage.style.color = '#7eacd2'; // azul pastel
        formMessage.textContent = "Mensagem enviada com sucesso! 🌱";
        this.reset();
    } else {
        formMessage.style.color = '#d29db3'; // rosa pastel para erro
        formMessage.textContent = "Por favor, preencha todos os campos.";
    }
});