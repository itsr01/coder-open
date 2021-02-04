//Função para atualizar página em inatividade
function refreshTimer(tempo){
    var refreshTimer;
    var t = tempo;
    
    refreshPage();
    
    $(document.body).bind("keypress", function(e) {
        //console.log("The key is pressed");
        clearTimeout(refreshTimer);
        refreshPage();
    });
    
    $(document).ready(function() {
        $(this).click(function(e) {
            //console.log("The mouse clicked");
            clearTimeout(refreshTimer);
            refreshPage();
        });
    });
    
    function refreshPage(){
        refreshTimer = setTimeout(() => {
            location.reload();
            //alert('reflesh!');    
        }, t);
    }
}