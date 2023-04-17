class Vehiculo {
    marca: string;
    modelo: string;
    patente: string;
  }
  
  const vehiculos: Vehiculo[] = [];
  
  function guardarVehiculo() {
    const marcaInput = (<HTMLInputElement>document.getElementById('marca')).value;
    const modeloInput = (<HTMLInputElement>document.getElementById('modelo')).value;
    const patenteInput = (<HTMLInputElement>document.getElementById('patente')).value;
  
    const v = new Vehiculo();
    v.marca = marcaInput;
    v.modelo = modeloInput;
    v.patente = patenteInput;
  
    vehiculos.push(v);
  
    let listHTML = '<ul>';
    for (const vehiculo of vehiculos) {
      listHTML += `<li>${vehiculo.marca} ${vehiculo.modelo} ${vehiculo.patente}</li>`;
    }
    listHTML += '</ul>';
  
    const listadoVehiculosDiv = document.getElementById('listadoVehiculos');
    if (listadoVehiculosDiv) { // Verificar si el elemento existe
      listadoVehiculosDiv.innerHTML = listHTML;
    } else {
      console.error("El elemento con ID 'listadoVehiculos' no se ha encontrado en el DOM.");
    }
  }
  
