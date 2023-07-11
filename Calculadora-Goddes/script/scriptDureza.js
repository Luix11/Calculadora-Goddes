function calcDureza() {

    //Document//
    var gemas6 = document.getElementById("6");
    var gemas7 = document.getElementById("7");
    var gemas8 = document.getElementById("8");
    var gemas9 = document.getElementById("9");
    var gemas10 = document.getElementById("10");

    var aliança = parseInt(document.getElementById("ali").value);
    var tiranico = parseInt(document.getElementById("tira").value);
    var domesticar = parseInt(document.getElementById("dom").value);
    var dominioFixo = parseInt(document.getElementById("domfix").value);

    var divina2 = document.getElementById("d2").value;
    var divina3 = document.getElementById("d3").value;
    var divina4 = document.getElementById("d4").value;
    var divina5 = document.getElementById("d5").value;
    var divina6 = document.getElementById("d6").value;
    var divina7 = document.getElementById("d7").value;
    var divina8 = document.getElementById("d8").value;
    var divina9 = document.getElementById("d9").value;
    var divina10 = document.getElementById("d10").value;

    var dragonP = document.getElementById("dp").value;
    var dragonL = document.getElementById("dl").value;

    var gen1 = document.getElementById("g1").value;
    var gen2 = document.getElementById("g2").value;
    var gen3 = document.getElementById("g3").value;
    var gen4 = document.getElementById("g4").value;
    var gen5 = document.getElementById("g5").value;
    var gen6 = document.getElementById("g6").value;
    var gen7 = document.getElementById("g7").value;
    var gen8 = document.getElementById("g8").value;
    var gen9 = document.getElementById("g9").value;
    var gen10 = document.getElementById("g10").value;

    var durezaTotal = document.getElementById("dt");
    var quebraBlok = document.getElementById("qb");
    var sub = document.getElementById("calcular");

    //Contas//
    var conta6 = (gemas6.value * 280);
    var conta7 = (gemas7.value * 560);
    var conta8 = (gemas8.value * 1050);
    var conta9 = (gemas9.value * 2500);
    var conta10 = (gemas10.value * 3750);

    var gemsContaTotal = parseInt(conta6 + conta7 + conta8 + conta9 + conta10);

    var outros = parseInt(aliança + tiranico + domesticar + dominioFixo);

    var totalBase = parseInt(gemsContaTotal + outros);

    //Dominio X4//
    var porc2 = totalBase * (2 / 100);
    var porc4 = totalBase * (4 / 100);
    var porc10 = totalBase * (10 / 100);
    var porc20 = totalBase * (20 / 100);

    var dominioTotal = parseInt(porc2 + porc4 + porc10 + porc20);

    var dominio = 0;
    var inputX4 = document.getElementById('x4');
    var inputX6 = document.getElementById('x6');
    var isChecked4 = inputX4.checked;
    var isChecked6 = inputX6.checked;
    if (isChecked4) {
        dominio = dominioTotal * 4;
    }
    if (isChecked6) {
        dominio = dominioTotal * 6;
    }

    var dv2 = totalBase * (divina2 / 100);
    var dv3 = totalBase * (divina3 / 100);
    var dv4 = totalBase * (divina4 / 100);
    var dv5 = totalBase * (divina5 / 100);
    var dv6 = totalBase * (divina6 / 100);
    var dv7 = totalBase * (divina7 / 100);
    var dv8 = totalBase * (divina8 / 100);
    var dv9 = totalBase * (divina9 / 100);
    var dv10 = totalBase * (divina10 / 100);

    var dgP = totalBase * (dragonP / 100);
    var dgL = totalBase * (dragonL / 100);

    var g1 = totalBase * (gen1 / 100);
    var g2 = totalBase * (gen2 / 100);
    var g3 = totalBase * (gen3 / 100);
    var g4 = totalBase * (gen4 / 100);
    var g5 = totalBase * (gen5 / 100);
    var g6 = totalBase * (gen6 / 100);
    var g7 = totalBase * (gen7 / 100);
    var g8 = totalBase * (gen8 / 100);
    var g9 = totalBase * (gen9 / 100);
    var g10 = totalBase * (gen10 / 100);

    var porcentagemTotal = parseInt(dv2 + dv3 + dv4 + dv5 + dv6 + dv7 + dv8 + dv9 + dv10 + dgP + dgL + g1 + g2 + g3 + g4 + g5 + g6 + g7 + g8 + g9 + g10);

    var tudo = dominio + porcentagemTotal;

    var brassaoUlt = 0.30;
    var todaDureza = parseInt((totalBase + tudo));
    var calcBrasao = todaDureza * brassaoUlt;
    var calcBlok = (todaDureza + calcBrasao) / 6;


    durezaTotal.innerHTML = parseInt(totalBase + tudo);
    quebraBlok.innerHTML = (calcBlok).toFixed(0);
}