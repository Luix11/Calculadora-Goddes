function calcDano() {

    //Document//
    var gemas6 = document.getElementById("dd6");
    var gemas7 = document.getElementById("dd7");
    var gemas8 = document.getElementById("dd8");
    var gemas9 = document.getElementById("dd9");
    var gemas10 = document.getElementById("dd10");

    var conjurar = parseInt(document.getElementById("cj").value);
    var dominioFixo = parseInt(document.getElementById("ddomfix").value);

    var divina2 = document.getElementById("ddd2").value;
    var divina3 = document.getElementById("ddd3").value;
    var divina4 = document.getElementById("ddd4").value;
    var divina5 = document.getElementById("ddd5").value;
    var divina6 = document.getElementById("ddd6").value;
    var divina7 = document.getElementById("ddd7").value;
    var divina8 = document.getElementById("ddd8").value;
    var divina9 = document.getElementById("ddd9").value;
    var divina10 = document.getElementById("ddd10").value;

    var dragonP = document.getElementById("ddp").value;
    var dragonL = document.getElementById("ddl").value;

    var gen1 = document.getElementById("dg1").value;
    var gen2 = document.getElementById("dg2").value;
    var gen3 = document.getElementById("dg3").value;
    var gen4 = document.getElementById("dg4").value;
    var gen5 = document.getElementById("dg5").value;
    var gen6 = document.getElementById("dg6").value;
    var gen7 = document.getElementById("dg7").value;
    var gen8 = document.getElementById("dg8").value;
    var gen9 = document.getElementById("dg9").value;
    var gen10 = document.getElementById("dg10").value;

    var danoTotal = document.getElementById("ddt");
    // var calDano = document.getElementById("dcalcular");

    //Conta//
    var conta6 = (gemas6.value * 840);
    var conta7 = (gemas7.value * 1680);
    var conta8 = (gemas8.value * 3150);
    var conta9 = (gemas9.value * 7500);
    var conta10 = (gemas10.value * 11250);

    var gemsContaTotal = parseInt((conta6 + conta7 + conta8 + conta9 + conta10));

    var outros = parseInt((conjurar + dominioFixo));

    var totalBase = parseInt((gemsContaTotal + outros));

    //Dominio X4//
    var porc2 = totalBase * (2 / 100);
    var porc4 = totalBase * (4 / 100);
    var porc10 = totalBase * (6 / 100);
    var porc20 = totalBase * (12 / 100);

    var dominioTotal = parseInt(porc2 + porc4 + porc10 + porc20);

    var dominio = 0;
    var inputX4 = document.getElementById('dx4');
    var inputX6 = document.getElementById('dx6');

    var isChecked4 = inputX4.checked;
    var isChecked6 = inputX6.checked;
    if(isChecked4){
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

    var porcentagemTotal = parseInt((dv2 + dv3 + dv4 + dv5 + dv6 + dv7 + dv8 + dv9 + dv10 + dgP + dgL + g1 + g2 + g3 + g4 + g5 + g6 + g7 + g8 + g9 + g10));
    var tudo = (dominio + porcentagemTotal);
    // var todoDano = parseInt((totalBase + tudo));
    danoTotal.innerHTML = parseInt((totalBase + tudo));
}