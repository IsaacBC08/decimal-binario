function binario_a_decimal() { 
    //obtener Binario
    var binario = document.getElementById('entrada').value

    let decimal = 0;
    try{
        // Recorremos el número binario de derecha a izquierda
        for (let i = binario.length - 1; i >= 0; i--) {
            // Convertimos cada dígito a un número entero
            const bin = parseInt(binario[i]);
            // Calculamos el valor de este dígito en decimal
            // multiplicándolo por 2 elevado a la posición correspondiente
            decimal += bin * Math.pow(2, binario.length - 1 - i);
            console.log(decimal)
        }

        //Escritura del html
        var lienzo = document.getElementById('salida')
        lienzo.innerText = decimal
    }
    catch{
        var lienzo = document.getElementById('salida')
        lienzo.innerText = "Error en el calculo"
    }
}

function decimal_a_binario(){
    //obtener decimal
    var decimal = document.getElementById('entrada').value

    //decimal no está vacío
    if (isNaN(decimal) || decimal === null || decimal === '') {
        var lienzo = document.getElementById('salida') 
        lienzo.innerText = "Por favor, ingrese un número decimal válido.";
    }
    else{
        
        try{
            // Convertir el número decimal a binario
            let binario = '';
            let num = Math.abs(parseInt(decimal)); // Tomar el valor absoluto para manejar números negativos
            

            while (num >= 1) {
                binario = (num % 2) + binario;
                num = Math.floor(num / 2);
            }
            
            
            // Manejar el caso de números decimales Negativos
            if (decimal < 0) {
                binario = '-' + binary;
            }

            var lienzo = document.getElementById('salida')
            lienzo.innerHTML = binario
        }
        catch{
            var lienzo = document.getElementById('salida') 
            lienzo.innerText = "Error en el cálculo"
            
        }
    }

}

function binario_a_hexadecimal() {
    //obtener binario
    var binario = document.getElementById('entrada').value
    try{
        // Convierte el número binario a decimal
        var decimal = parseInt(binario, 2);

        // Convierte el número decimal a hexadecimal
        var hexadecimal = decimal.toString(16).toUpperCase();

        //Escribir en html
        var lienzo = document.getElementById('salida')
        lienzo.innerText = String(hexadecimal)

    }
    catch{
        var lienzo = document.getElementById('salida')
        lienzo.innerText = "Error en el calculo"
    }
}

function hexadecimal_a_binario() {
    //obtener hexadecimal
    var hexadecimal = document.getElementById('entrada').value
    try{
        // Convierte el número hexadecimal a decimal
        var decimal = parseInt(hexadecimal, 16);

        // Convierte el número decimal a binario
        var binario = decimal.toString(2);

        var lienzo = document.getElementById('salida')
        if (binario.length > 250){
            lienzo.innerText = "El binario es inmenso"
        }
        else{
            lienzo.innerText = binario
        }
        

    }
    catch{}
}

function octal_a_binario(){
    var numeroOctal = document.getElementById('entrada').value //Tomamos el octal

    var numeroDecimal = parseInt(numeroOctal, 8)
    //tomamos el octal base 8 y lo pasamos a decimal con 

    var numeroBinario = numeroDecimal.toString(2);
    //De decimal a binario
    var lienzo = document.getElementById('salida')
    lienzo.innerText = numeroBinario
}

function binario_a_octal() {
    var numeroBinario = document.getElementById('entrada').value; //Tomamos el binario

    var numeroDecimal = parseInt(numeroBinario, 2);
    //Tomamos el binario base 2 y lo pasamos a decimal

    var numeroOctal = numeroDecimal.toString(8);
    //De decimal a octal

    var lienzo = document.getElementById('salida');
    lienzo.innerText = numeroOctal;
}


