// special-section.js

$(document).ready(function () {
    // Seção oculta
    var hiddenSection = $("#hiddenSection");

    // Botão para exibir a seção oculta
    var showSectionButton = $("#showSectionButton");

    // Senha para acessar a seção oculta
    var password = "0000"; // Substitua com sua senha desejada

    // Função para verificar a senha e exibir suavemente a seção oculta
    function checkPassword() {
        var userPassword = prompt("Digite a senha para acessar a seção oculta:");

        if (userPassword === password) {
            hiddenSection.fadeIn(2000); // Usando fadeIn para exibir suavemente a seção
        } else {
            alert("Senha incorreta. Tente novamente.");
        }
    }

    // Adiciona um evento de clique ao botão de exibir a seção oculta
    showSectionButton.click(checkPassword);
});
