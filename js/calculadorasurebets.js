cuota1 = 0;
cuota2 = 0;
cuota3 = 0;
totalApuesta = 0;

//función calculadora surebets 3 opciones
function clickbutton3() {
    
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

    if(porcentajeBeneficioTotal > 0){
        mostrarBfoTotal.classList.add("text-success")
    }else{
        mostrarBfoTotal.classList.add("text-danger")
    };
    if(porcentajeBeneficioTotal > 0){
        mostrarPorcentaje.classList.add("text-success")
    }else{
        mostrarPorcentaje.classList.add("text-danger")
    };

}


cuota12 = 0;
cuota22 = 0;
totalApuesta2 = 0;
//funcion calculadora 2 opciones
function clickbutton2() {
    
    cuota12 = document.getElementById("cuota1-2").value;
    cuota22 = document.getElementById("cuota2-2").value;
    totalApuesta2 = document.getElementById("total-apuesta-2").value;
    cuota1div2 = 1/cuota12;
    cuota2div2 = 1/cuota22;
    
    beneficio2 = cuota1div2 + cuota2div2;
    porcentajePagos2 = (1/beneficio2) * 100;
    probCuota12 = (cuota1div2 * porcentajePagos2).toFixed(2);
    probCuota22 = (cuota2div2 * porcentajePagos2).toFixed(2);
   
    apuestaCuota12 = (totalApuesta2 * (probCuota12/100)).toFixed(2);
    apuestaCuota22 = (totalApuesta2 * (probCuota22/100)).toFixed(2);
    
    bfoCuota12 = (cuota12 * apuestaCuota12).toFixed(2);
    bfoCuota22 = (cuota22 * apuestaCuota22).toFixed(2);
    
    arrResultados2 = [bfoCuota12, bfoCuota22];
    bfoMinimo2 = Math.min(...arrResultados2);
    bfoMinimoRedondeado2 = bfoMinimo2.toFixed(2);
    netoMinimoTotal2 = bfoMinimoRedondeado2 - totalApuesta2;
    netoMinimoRed2 = netoMinimoTotal2.toFixed(2);
    porcentajeBeneficioTotal2 = ((netoMinimoTotal2 / totalApuesta2) * 100).toFixed(2);
    let mostrarBfoTotal2 = document.getElementById("beneficio-total-2");
    mostrarBfoTotal2.innerHTML = netoMinimoRed2 + "€";
    let mostrarPorcentaje2 = document.getElementById("porcentaje-beneficio-2");
    mostrarPorcentaje2.innerHTML = porcentajeBeneficioTotal2 + "%";
    let sitioProbabilidadCuota12 = document.getElementById("muestraProbabilidadCuota1-2")
    let sitioProbabilidadCuota22 = document.getElementById("muestraProbabilidadCuota2-2")
    
    sitioProbabilidadCuota12.innerHTML = probCuota12 + "%";
    sitioProbabilidadCuota22.innerHTML = probCuota22 + "%";
   
    let sitioCantidad12 = document.getElementById("cantidadApuestaCuota1-2");
    let sitioCantidad22 = document.getElementById("cantidadApuestaCuota2-2");
    
    sitioCantidad12.innerHTML = apuestaCuota12 + "€";
    sitioCantidad22.innerHTML = apuestaCuota22 + "€";
    
    let sitioGanancia12 = document.getElementById ("gananciaCuota1-2");
    let sitioGanancia22 = document.getElementById ("gananciaCuota2-2");
  
    sitioGanancia12.innerHTML = bfoCuota12 + "€";
    sitioGanancia22.innerHTML = bfoCuota22 + "€";
   




    if(cuota12 == 0 || cuota22 == 0){
        window.alert("Debes introducir las 2 cuotas")
    }else if (totalApuesta2 == 0) {
        window.alert("Debes introducir el total a apostar")
    }

    if(porcentajeBeneficioTotal2 > 0){
        mostrarBfoTotal2.classList.add("text-success")
    }else{
        mostrarBfoTotal2.classList.add("text-danger")
    };
    if(porcentajeBeneficioTotal2 > 0){
        mostrarPorcentaje2.classList.add("text-success")
    }else{
        mostrarPorcentaje2.classList.add("text-danger")
    };

}
