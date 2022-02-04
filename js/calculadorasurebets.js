cuota1 = 0;
cuota2 = 0;
cuota3 = 0;
totalApuesta = 0;

//función que recoge valores
function clickbutton() {
    
    cuota1 = document.getElementById("cuota1").value;
    cuota2 = document.getElementById("cuota2").value;
    cuota3 = document.getElementById("cuota3").value;
    totalApuesta = document.getElementById("total-apuesta").value;
    cuota1div = 1/cuota1;
    cuota2div = 1/cuota2;
    cuota3div = 1/cuota3;
    beneficio = cuota1div + cuota2div + cuota3div;
    porcentajePagos = (1/beneficio) * 100;
    probCuota1 = (cuota1div * porcentajePagos).toFixed(2);
    probCuota2 = (cuota2div * porcentajePagos).toFixed(2);
    probCuota3 = (cuota3div * porcentajePagos).toFixed(2);
    apuestaCuota1 = (totalApuesta * (probCuota1/100)).toFixed(2);
    apuestaCuota2 = (totalApuesta * (probCuota2/100)).toFixed(2);
    apuestaCuota3 = (totalApuesta * (probCuota3/100)).toFixed(2);
    bfoCuota1 = (cuota1 * apuestaCuota1).toFixed(2);
    bfoCuota2 = (cuota2 * apuestaCuota2).toFixed(2);
    bfoCuota3 = (cuota3 * apuestaCuota3).toFixed(2);
    arrResultados = [bfoCuota1, bfoCuota2, bfoCuota3];
    bfoMinimo = Math.min(...arrResultados);
    bfoMinimoRedondeado = bfoMinimo.toFixed(2);
    netoMinimoTotal = bfoMinimoRedondeado - totalApuesta;
    netoMinimoRed = netoMinimoTotal.toFixed(2);
    porcentajeBeneficioTotal = ((netoMinimoTotal / totalApuesta) * 100).toFixed(2);
    let mostrarBfoTotal = document.getElementById("beneficio-total");
    mostrarBfoTotal.innerHTML = netoMinimoRed + "€";
    let mostrarPorcentaje = document.getElementById("porcentaje-beneficio");
    mostrarPorcentaje.innerHTML = porcentajeBeneficioTotal + "%";
    let sitioProbabilidadCuota1 = document.getElementById("muestraProbabilidadCuota1")
    let sitioProbabilidadCuota2 = document.getElementById("muestraProbabilidadCuota2")
    let sitioProbabilidadCuota3 = document.getElementById("muestraProbabilidadCuota3")
    sitioProbabilidadCuota1.innerHTML = probCuota1 + "%";
    sitioProbabilidadCuota2.innerHTML = probCuota2 + "%";
    sitioProbabilidadCuota3.innerHTML = probCuota3 + "%";
    let sitioCantidad1 = document.getElementById("cantidadApuestaCuota1");
    let sitioCantidad2 = document.getElementById("cantidadApuestaCuota2");
    let sitioCantidad3 = document.getElementById("cantidadApuestaCuota3");
    sitioCantidad1.innerHTML = apuestaCuota1 + "€";
    sitioCantidad2.innerHTML = apuestaCuota2 + "€";
    sitioCantidad3.innerHTML = apuestaCuota3 + "€";
    let sitioGanancia1 = document.getElementById ("gananciaCuota1");
    let sitioGanancia2 = document.getElementById ("gananciaCuota2");
    let sitioGanancia3 = document.getElementById ("gananciaCuota3");
    sitioGanancia1.innerHTML = bfoCuota1 + "€";
    sitioGanancia2.innerHTML = bfoCuota2 + "€";
    sitioGanancia3.innerHTML = bfoCuota3 + "€";




    if(cuota1 == 0 || cuota2 == 0 || cuota3 == 0){
        window.alert("Debes introducir las 3 cuotas")
    }else if (totalApuesta == 0) {
        window.alert("Debes introducir el total a apostar")
    }

}
