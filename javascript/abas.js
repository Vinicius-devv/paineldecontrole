
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active de todas as abas e conteúdos
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        // Adiciona active na aba clicada e no conteúdo correspondente
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});