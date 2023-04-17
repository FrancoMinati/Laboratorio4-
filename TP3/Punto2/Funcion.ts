function getVillano(nombre: string, edad?: number, arma: string = "pistola"): string {
    let mensaje: string;
    if (edad) {
      mensaje = `${nombre} tiene una edad de: ${edad} y arma: ${arma}`;
    } else {
      mensaje = `${nombre} tiene un ${arma}`;
    }
    return mensaje;
  }