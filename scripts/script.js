document.addEventListener('DOMContentLoaded', function () {
    // Função para formatar o código com Prism.js
    function formatCode(language, codeContent) {
        const codeBlock = document.getElementById('codeLabel');

        // Definindo a linguagem e o conteúdo do código
        codeBlock.className = 'language-' + language;  // Adiciona a classe da linguagem
        codeBlock.textContent = codeContent;  // Define o conteúdo do código

        // Reformatando o código com Prism.js
        Prism.highlightElement(codeBlock);
    }

    // Função para copiar o código para a área de transferência usando a API moderna
    function copyToClipboard() {
        const code = document.getElementById('codeLabel');
        const textToCopy = code.textContent || code.innerText;

        navigator.clipboard.writeText(textToCopy)
            .then(function () {
                alert('Texto copiado!');
            })
            .catch(function (err) {
                console.error('Erro ao copiar o texto: ', err);
            });
    }

    // Definindo o conteúdo do código e a linguagem
    const codeContent = `function helloWorld() {
        console.log('Hello, world!');
    }`;

    // Formatar o código como JavaScript
    formatCode('javascript', codeContent);

    // Adicionar o evento de clique para o botão de copiar
    const copyButton = document.querySelector('.copybtn');
    copyButton.addEventListener('click', copyToClipboard);
});
