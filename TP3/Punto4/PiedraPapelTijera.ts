enum Movimiento {
    PIEDRA,
    PAPEL,
    TIJERAS
  }
  
  class Jugada {
    jugador1: Movimiento;
    jugador2: Movimiento;
  
    constructor(jugador1: Movimiento, jugador2: Movimiento) {
      this.jugador1 = jugador1;
      this.jugador2 = jugador2;
    }
  }
  
  function calcularResultado(jugadas: Jugada[]): string {
    let ganador1 = 0;
    let ganador2 = 0;
    let empate = 0;
  
    for (const jugada of jugadas) {
      if (jugada.jugador1 === jugada.jugador2) {
        empate++;
      } else if (
        (jugada.jugador1 === Movimiento.PIEDRA && jugada.jugador2 === Movimiento.TIJERAS) ||
        (jugada.jugador1 === Movimiento.PAPEL && jugada.jugador2 === Movimiento.PIEDRA) ||
        (jugada.jugador1 === Movimiento.TIJERAS && jugada.jugador2 === Movimiento.PAPEL)
      ) {
        ganador1++;
      } else {
        ganador2++;
      }
    }
  
    if (ganador1 > ganador2) {
      return "Gana 1";
    } else if (ganador2 > ganador1) {
      return "Gana 2";
    } else {
      return "Empate";
    }
  }
  
  // Ejemplo de uso
  const jugadas = [
    new Jugada(Movimiento.PIEDRA, Movimiento.PAPEL),
    new Jugada(Movimiento.TIJERAS, Movimiento.TIJERAS),
    new Jugada(Movimiento.PAPEL, Movimiento.PIEDRA),
    new Jugada(Movimiento.TIJERAS, Movimiento.PIEDRA),
    new Jugada(Movimiento.PAPEL, Movimiento.PAPEL)
  ];
  
  const resultado = calcularResultado(jugadas);
  console.log(resultado); // GANA JUGADOR 2
  
  