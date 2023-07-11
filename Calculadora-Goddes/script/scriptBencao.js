// gemas 7 / 6 benção = 0,12 por 100 gemas/ max 0,72
// gemas 8 / 9 benção = 0,16 por 100 gemas/ max 1,44
// gemas 9 / 12 benção = 0,2 por 100 gemas/ max 2,4
// gemas 10 / 15 benção = 0,224   por 100 gemas / max 3,36
// var valor
// tipo de gema - quantidade de gema - quantidade de benção - resultado
// valor * (0,12) / (100);
// valor * (0,16) / (100);
// valor * (0,20) / (100);
function calc() {
    var type = document.getElementById("type");
    var valuetype = type.value;

    var quantg = document.getElementById("quantg");
    var valueqg = quantg.value;

    var valueCont = 0;

    if(valuetype == 6){
        valueCont = (0,8) / (100), valueqb = 3;
    }else if (valuetype == 7) {
        valueCont = (0, 12) / (100), valueqb = 6;
    }else if (valuetype == 8) {
        valueCont = (0, 16) / (100), valueqb = 9;
    }else if (valuetype == 9) {
        valueCont = (0,20) / (100), valueqb = 12;
    }else if (valuetype == 10) {
        valueCont = ((0,24)-2) / (100), valueqb = 15;
    }
    var result = ((valueqb * valueCont)).toFixed(0);
    var gemas = valueqb * 100;
    var quantgemas = result * valueqg;
    var gemasPgemas = gemas * valueqg;

    var h1 = document.getElementById("resul");
    var h2 = document.getElementById("resul2");
    var h3 = document.getElementById("resul3");
    var h4 = document.getElementById("resul4");
    
    h1.innerHTML = "Porcentagem por Gemas: " + result;
    h2.innerHTML = "Gemas Gastas em cada: " + gemas;
    h3.innerHTML = "Porcentagem Total: " + quantgemas;
    h4.innerHTML = "Gastos Total: " + gemasPgemas;
}
