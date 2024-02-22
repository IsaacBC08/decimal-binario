function decimal_a_binario(decimal) {

    if (isNaN(decimal) || decimal === null || decimal === '') {
        return "Por favor, ingrese un número decimal válido.";
    }
    
    // Convertir el número decimal a binario
    let binary = '';
    let num = Math.abs(decimal); // Tomar el valor absoluto para manejar números negativos
    
    while (num >= 1) {
        binary = (num % 2) + binary;
        num = Math.floor(num / 2);
    }
    
    // Manejar el caso de números decimales Negativos
    if (decimal < 0) {
        binary = '-' + binary;
    }
    
    return binary;
}
function binario_a_decimal(binario) { 
    let decimal = 0;
    // Recorremos el número binario de derecha a izquierda
    for (let i = binario.length - 1; i >= 0; i--) {
        // Convertimos cada dígito a un número entero
        const bin = parseInt(binario[i]);
        // Calculamos el valor de este dígito en decimal
        // multiplicándolo por 2 elevado a la posición correspondiente
        decimal += bin * Math.pow(2, binario.length - 1 - i);
    }
    return decimal;
}


function sumar(){
    var binario1 = document.getElementById('binario1').value
    var binario2 = document.getElementById('binario2').value
    //Recibimos los binarios a sumar 
    
    var conversion_a_decimal1 = binario_a_decimal(binario1)
    var conversion_a_decimal2 = binario_a_decimal(binario2)

    //convertimos los dos binarios a decimales
    try{
        var resultado_decimal = conversion_a_decimal1 + conversion_a_decimal2
        //Hacemos la suma de ambos decimales

        var resultado_decimal_entero = parseInt(resultado_decimal)
        //Nos aseguramos de que el resultado sea un entero

        var resultado_binario = decimal_a_binario(resultado_decimal_entero)
        //Convetimos el resultado en binario


        var lienzo = document.getElementById('lienzo')
        lienzo.innerText = resultado_binario
    }
    catch{
        return "Operación invalida"
    }

}

function restar(){
    var binario1 = document.getElementById('binario1').value
    var binario2 = document.getElementById('binario2').value
    //Recibimos los binarios a sumar 
    
    var conversion_a_decimal1 = binario_a_decimal(binario1)
    var conversion_a_decimal2 = binario_a_decimal(binario2)

    //convertimos los dos binarios a decimales

    var resultado_decimal = conversion_a_decimal1 - conversion_a_decimal2
    //Hacemos la suma de ambos decimales

    var resultado_decimal_entero = parseInt(resultado_decimal)
    //Nos aseguramos de que el resultado sea un entero

    var resultado_binario = decimal_a_binario(resultado_decimal_entero)
    //Convetimos el resultado en binario
    var lienzo = document.getElementById('lienzo')

    if(resultado_binario === ""){
        lienzo.innerText = "0"
        console.log(resultado_binario)
    }

    else{
        lienzo.innerText = resultado_binario
        console.log(resultado_binario)
    }
}

function multiplicar(){
    var binario1 = document.getElementById('binario1').value 
    var binario2 = document.getElementById('binario2').value
    //Recibimos los binarios a sumar 
    
    var conversion_a_decimal1 = binario_a_decimal(binario1)
    var conversion_a_decimal2 = binario_a_decimal(binario2)
    //convertimos los dos binarios a decimales

    var resultado_decimal = conversion_a_decimal1 * conversion_a_decimal2
    //Hacemos la suma de ambos decimales

    var resultado_decimal_entero = parseInt(resultado_decimal)
    //Nos aseguramos de que el resultado sea un entero

    var resultado_binario = decimal_a_binario(resultado_decimal_entero)
    //Convetimos el resultado en binario


    var lienzo = document.getElementById('lienzo')
    lienzo.innerText = resultado_binario

}
function dividir(){
    var binario1 = document.getElementById('binario1').value
    var binario2 = document.getElementById('binario2').value
    //Recibimos los binarios a sumar 
    
    var conversion_a_decimal1 = binario_a_decimal(binario1)
    var conversion_a_decimal2 = binario_a_decimal(binario2)
    //convertimos los dos binarios a decimales

    var resultado_decimal = conversion_a_decimal1 / conversion_a_decimal2
    //Hacemos la suma de ambos decimales

    var resultado_decimal_entero = parseInt(resultado_decimal)
    //Nos aseguramos de que el resultado sea un entero

    var resultado_binario = decimal_a_binario(resultado_decimal_entero)
    //Convetimos el resultado en binario

    if(resultado_binario === ""){
        lienzo.innerText = "Operación invalida"
        console.log(resultado_binario)
    }

    else{
        lienzo.innerText = resultado_binario
        console.log(resultado_binario)
    }
}
