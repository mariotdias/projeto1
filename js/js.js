var res1 = window.document.getElementById('res1');
var res2 = window.document.getElementById('res2');
var btn1 = window.document.getElementById('btn1');
var btn2 = window.document.getElementById('btn2');

function click1() {
    var player = window.prompt("Digite o nome do jogador: ");
    if (player == "cassio") {
        res1.innerHTML = ("<img src=/imgs/cassio.png id='foto'>");
        res2.innerHTML = ("Cássio Ramos!");
    }
    else if (player == "ceni") {
        res1.innerHTML = ("<img src=/imgs/ceni.png id='foto'>");
        res2.innerHTML = ("Rógerio Ceni");
    }
    else if (player == "fabio") {
        res1.innerHTML = ("<img src=/imgs/fabio.png id='foto'>");
        res2.innerHTML = ("Fábio");
    }
    else {
        window.alert("Por favor verifique se o nome digitado está correto!");
    }
    btn1.style.display = 'none';
    btn2.style.display = 'inline';
}
function click2() {
    res1.innerHTML = ("");
    res2.innerHTML = ("");
    btn2.style.display = 'none';
    btn1.style.display = 'inline';
}
var n1 = 263;
var n2 = 244;
var n3 = 290;
var soma = (n1 + n2 + n3);
var avg = (soma / 3) * 0.01;
var somanr = 708;
var dif = (soma - somanr)/3;
var difshow = dif * 0.01;

if (soma <= somanr) {
    console.log("NR");
}
else {
    console.log("Not NR");
    console.log(difshow.toFixed(2));
}
console.log("AVG = " + avg.toFixed(2));