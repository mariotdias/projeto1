var res1 = window.document.getElementById('res1');
var res2 = window.document.getElementById('res2');
var btn1 = window.document.getElementById('btn1');
var btn2 = window.document.getElementById('btn2');

function click1(){
    var player  = window.prompt("Digite o nome do jogador: ");
    if(player == "cassio"){
        res1.innerHTML = ("<img src=/imgs/cassio.png id='foto'>")
        res2.innerHTML = ("Cássio Ramos!");
    }
    else{
        window.alert("Por favor verifique se o nome digitado está correto!");
    }
    btn1.style.display = 'none';
    btn2.style.display = 'inline';
}
function click2(){
    res1.innerHTML = ("");
    res2.innerHTML = ("");
    btn2.style.display = 'none';
    btn1.style.display = 'inline';
}
