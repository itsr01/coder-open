// MENU DE CONTEXTO COM JQUERY (clique com botão direito do mouse) //

document.addEventListener('contextmenu', event => event.preventDefault());

$( document ).contextmenu(function() {
    alert( "Função aqui!" );
});