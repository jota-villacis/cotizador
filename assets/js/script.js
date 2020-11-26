// 2 opciones Enviar o Recibir


// Si selecciono enviar el monto ingresado se
// trabaja en Pesos Chilenos(CLP)
// Debo Seleccionar 1 de los 3 paises disponibles
// para realizar el cambio PEN, COP, BRL

// Si escribo 10.000 en "Enviar" y selecciono
// Brasil(BRL) me entrega el resultado del calculo 
// de los 10.000 pesos a moneda brasileña en la
// casilla "Recibes" 

// Si escribo 10.000 en "Recibes" y selecciono
// Brasil me entrega la conversion de los 10.000
// a pesos "Chilenos" en la casilla "Envias"


//MONTOS MINIMOS SACADOS DE LA WEB CURRENCYBIRD

// El monto minimo ingresado en Recibir es de 7 si se elije Brasil
// El monto minimo ingresado en Recibir es de 4 si se elije Peru
// El monto minimo ingresado en Recibir es de 7200 si se elije Colombia

// El monto minimo ingresado en Enviar es de 3000 si se elije Brasil
// El monto minimo ingresado en Enviar es de 3500 si se elije Peru
// El monto minimo ingresado en Enviar es de 8000 si se elije Colombia




/********************************************/

// GLOBAL
const dolar = 757;
const spreadDolarPeso = 0.4;

// PERU
const margenP = 3;
const valorUsdPen = 0.28
const spreadPen = 1.5

// BRASIL
const margenB = 2.9;
const valorUsdBrl = 0.19;
const spreadBrl = 1.2;

// COLOMBIA
const margenC = 3.5;
const valorUsdCop = 0.00027;
const spreadCop = 1.8;



// FUNCION RECIBIR

function cotizadorRecibir(){

    let operacion = prompt("Seleccionar pais: 1)Brasil, 2) Perú, 3) Colombia");

    if(operacion == 1){
        
        let montoIngresado = prompt("Ingresar monto")
        
        if(montoIngresado >= 7){
        
            let valorDolar = (montoIngresado * valorUsdBrl)
            //console.log(valorDolar)
            let valorSpread = ((valorDolar * spreadBrl)/100)
            //console.log(valorSpread)
            let sumaSpread = (valorDolar + valorSpread)
            //console.log(sumaSpread)
            let valorEnCLP = (sumaSpread * dolar)
            //console.log(valorEnCLP)
            let conversionUsdClp = ((valorEnCLP * spreadDolarPeso)/100)
            //console.log(conversionUsdClp)
            let sumaSpreadCal = (valorEnCLP + conversionUsdClp)
            //console.log(sumaSpreadCal)
            let margenValorCal = ((sumaSpreadCal * margenB)/100)
            //console.log(margenValorCal)
            let total = (sumaSpreadCal + margenValorCal)
            //console.log(total)
            
            //console.log("intro 1")
            return Math.round(total);  
        }else{
            alert("monto no válido")
        }


    
    }
    
    else if(operacion == 2){
        
        let montoIngresado = prompt("Ingresar monto");
        
        if(montoIngresado >= 4){
        
            let valorDolar = (montoIngresado * valorUsdPen)
            //console.log(valorDolar)
            let valorSpread = ((valorDolar * spreadPen)/100)
            //console.log(valorSpread)
            let sumaSpread = (valorDolar + valorSpread)
            //console.log(sumaSpread)
            let valorEnCLP = (sumaSpread * dolar)
            //console.log(valorEnCLP)
            let conversionUsdClp = ((valorEnCLP * spreadDolarPeso)/100)
            //console.log(conversionUsdClp)
            let sumaSpreadCal = (valorEnCLP + conversionUsdClp)
            //console.log(sumaSpreadCal)
            let margenValorCal = ((sumaSpreadCal * margenP)/100)
            //console.log(margenValorCal)
            let total = (sumaSpreadCal + margenValorCal)
            //console.log(total)
            
            //console.log("intro 2")
            return Math.round(total);
        }else{
            alert("monto no válido")
        }

    
    }
    
    else if(operacion == 3){
        
        let montoIngresado = prompt("Ingresar monto")
        
        if(montoIngresado >= 7200){
            
            let valorDolar = (montoIngresado * valorUsdCop) 
            //console.log(valorDolar)
            let valorSpread = ((valorDolar * spreadCop)/100) 
            //console.log(valorSpread)
            let sumaSpread = (valorDolar + valorSpread)
            //console.log(sumaSpread)
            let valorEnCLP = (sumaSpread * dolar)
            //console.log(valorEnCLP)
            let conversionUsdClp = ((valorEnCLP * spreadDolarPeso)/100)
            //console.log(conversionUsdClp)
            let sumaSpreadCal = (valorEnCLP + conversionUsdClp)
            //console.log(sumaSpreadCal)
            let margenValorCal = ((sumaSpreadCal * margenC)/100)
            //console.log(margenValorCal)
            let total = (sumaSpreadCal + margenValorCal)
            //console.log(total)
            
            //console.log("intro 3")
            return Math.round(total);
        }else{
            alert("monto no válido")
        }


        /*
        let valorDolar = (montoIngresado * 0.00027) 
        console.log(valorDolar)
        let valorSpread = ((valorDolar * 1.8)/100) 
        console.log(valorSpread)
        let sumaSpread = (valorDolar + valorSpread)
        console.log(sumaSpread)
        let valorEnCLP = (sumaSpread * 757)
        console.log(valorEnCLP)
        let conversionUsdClp = ((valorEnCLP * 0.4)/100)
        console.log(conversionUsdClp)
        let sumaSpreadCal = (valorEnCLP + conversionUsdClp)
        console.log(sumaSpreadCal)
        let margenValorCal = ((sumaSpreadCal * 3.5)/100)
        console.log(margenValorCal)
        let total = (sumaSpreadCal + margenValorCal)
        console.log(total)

        console.log("intro 3")
        return total;
        */
    }
    
    else{
        alert("Opción no valida")
    }
    
}

/*
    
Para realizar la codificacion de la funcion Enviar, en primera instancia crei que debia realizar la codificacion
de Recibir pero en sentido contrario, lo que despues de probar y codificarlo y darle una revision, me di cuenta
que no tenia sentido.

Otro de los intentos fue realizar todas las operaciones matematicas de manera contraria a lo realizado en la
codificacion de Recibir pero tampoco tenia sentido.

Finalmente realice la siguiente codificacion con la que tampoco pude dar con el output esperado

*/



// FUNCION ENVIAR 

function cotizadorEnviar(){

    let operacion = prompt("Seleccionar pais: 1)Brasil, 2) Perú, 3) Colombia");

    if(operacion == 1){
        
        let montoIngresado = prompt("Ingresar monto")
        
        if(montoIngresado >= 3000){
            
            let valorDolar = (montoIngresado * dolar)
            //console.log(valorDolar)
            let valorSpread = ((valorDolar * spreadDolarPeso)/100)
            //console.log(valorSpread)
            let sumaSpread = (valorDolar - valorSpread)
            //console.log(sumaSpread)
            let valorEnCLP = (sumaSpread / valorUsdBrl)
            //console.log(valorEnCLP)
            let conversionUsdClp = ((valorEnCLP * spreadDolarPeso)/100)
            //console.log(conversionUsdClp)
            let sumaSpreadCal = (valorEnCLP - conversionUsdClp)
            //console.log(sumaSpreadCal)
            let margenValorCal = ((sumaSpreadCal * margenB)/100)
            //console.log(margenValorCal)
            let total = (sumaSpreadCal - margenValorCal)
            //console.log(total)

            //console.log("intro 1")
            return Math.round(total);
        }else{
            alert("monto no válido")
        }
    
}
    
    else if(operacion == 2){
        
        let montoIngresado = prompt("Ingresar monto");
        
        if(montoIngresado >= 3500){

            let valorDolar = (montoIngresado / dolar)
            //console.log(valorDolar)
            let valorSpread = ((valorDolar * spreadDolarPeso)/100)
            //console.log(valorSpread)
            let sumaSpread = (valorDolar - valorSpread)
            //console.log(sumaSpread)
            let valorEnCLP = (sumaSpread / valorUsdPen)
            //console.log(valorEnCLP)
            let conversionUsdClp = ((valorEnCLP * spreadPen)/100)
            //console.log(conversionUsdClp)
            let sumaSpreadCal = (valorEnCLP - conversionUsdClp)
            //console.log(sumaSpreadCal)
            let margenValorCal = ((sumaSpreadCal * margenP)/100)
            //console.log(margenValorCal)
            let total = (sumaSpreadCal - margenValorCal)
            //console.log(total)
            
            //console.log("intro 2")
            return Math.round(total);
        }else{
            alert("monto no válido")
        }
        
}
    
    else if(operacion == 3){
        
        let montoIngresado = prompt("Ingresar monto")
        
        if(montoIngresado >= 8000){
        
            let valorDolar = (montoIngresado / dolar)
            //console.log()
            let valorSpread = ((valorDolar * spreadDolarPeso)/100)
            //console.log()
            let sumaSpread = (valorDolar - valorSpread)
            //console.log()
            let valorEnCLP = (sumaSpread / valorUsdCop)
            //console.log()
            let conversionUsdClp = ((valorEnCLP * spreadCop)/100)
            //console.log()
            let sumaSpreadCal = (valorEnCLP + conversionUsdClp)
            //console.log()
            let margenValorCal = ((sumaSpreadCal * margenC)/100)
            //console.log()
            let total = (sumaSpreadCal - margenValorCal)
            //console.log()

            //console.log("intro 3")
            return Math.round(total);
        }else{
            alert("monto no válido")
        }
}   
    
    else{
        alert("Opción no valida")
    }

}



/*
document.write(`
    ${cotizadorRecibir()}
    `
);
*/

/*
document.write(`
    ${cotizadorEnviar()}
    `
);
*/


/*
let boton = document.getElementById('form1');

document.getElementById('envias').addEventListener('click', function(e){
    form1.disabled = false;
});

document.getElementById('recibes').addEventListener('click', function(e){
    form1.disabled = true;
});
*/





