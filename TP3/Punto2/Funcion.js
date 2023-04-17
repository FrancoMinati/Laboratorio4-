function getVillano2(nombre = "fernando", edad = 18, arma = "Pistola"){
    var mensaje;
    if(edad <= 17){
        mensaje = nombre + "Tiene una edad de: " + edad + " Y arma: " + arma;
        console.log(mensaje);
    }
    else{
        mensaje = nombre + "tiene un" + edad
        console.log(mensaje);
    }
};

