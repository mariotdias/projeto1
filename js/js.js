var res1 = window.document.getElementById('res1');
var res2 = window.document.getElementById('res2');

function click1(){
    var player  = window.prompt("Digite o nome do jogador: ");
    if(player == "cassio"){
        console.log("certo");
        res1.innerHTML = ("<img src=/imgs/cassio.png id='foto'>")
        res2.innerHTML = ("Cássio Ramos!");
    }
}
