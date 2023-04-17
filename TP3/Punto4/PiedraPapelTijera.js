const Movimientos = {
    PIEDRA: 0,
    PAPEL: 1,
    TIJERA: 2
};

class Jugadas{
    constructor(jugador1, jugador2){
        this.jugador1 = jugador1;
        this.jugador2 = jugador2;
    }
}

function ganador(){
    let contadorJugador1 = 0;
    let contadorJugador2 = 0;

    jugadas.forEach(jugada => {

        if(jugada.jugador1 === jugada.jugador2){
            return;

        }else if (

            (jugada.jugador1 === Movimientos.PIEDRA && jugada.jugador2 === Movimientos.TIJERA) ||
            (jugada.jugador1 === Movimientos.PAPEL && jugada.jugador2 === Movimientos.PIEDRA) ||
            (jugada.jugador1 === Movimientos.TIJERA && jugada.jugador2 === Movimientos.PAPEL)
            
        ){

                contadorJugador1++;
            }
            else{
                contadorJugador2++
            }    
    });

if(contadorJugador1 > contadorJugador2){

    return "GANA JUGADOR 1";

}else if(contadorJugador1 < contadorJugador2){

    return "GANA JUGADOR 2";

}else{

    return "EMPATE";
    }
}

const jugadasPrueba = [
    new Jugadas(Movimientos.PIEDRA, Movimientos.PAPEL),
    new Jugadas(Movimientos.TIJERAS, Movimientos.TIJERAS),
    new Jugadas(Movimientos.PAPEL, Movimientos.PIEDRA),
    new Jugadas(Movimientos.TIJERAS, Movimientos.PIEDRA),
    new Jugadas(Movimientos.PAPEL, Movimientos.PAPEL)
  ];
  
  const resultados = ganador(jugadasPrueba);
  console.log(resultados); //GANA JUGADOR 2