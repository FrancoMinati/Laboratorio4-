interface Reptil {
    nombre: string;
    tipo: string;
    paisOrigen: string;
    pesoPromedio: number;
    esVenenosa: boolean;
  }
  
  var reptil: Reptil = {
    nombre: "cobra",
    tipo: "serpiente",
    paisOrigen: "India",
    pesoPromedio: 2.5,
    esVenenosa: true
  };
  
  console.log(reptil.nombre); // Salida: "cobra"
  console.log(reptil.tipo); // Salida: "serpiente"
  console.log(reptil.paisOrigen); // Salida: "India"
  console.log(reptil.pesoPromedio); // Salida: 2.5
  console.log(reptil.esVenenosa); // Salida: true