var Vehiculos = /** @class */ (function () {
    function Vehiculo() {
    }
    return Vehiculo;
}());
var vehiculosArray = [];
function guardarVehiculos() {
    var marcaInput = document.getElementById('marca').value;
    var modeloInput = document.getElementById('modelo').value;
    var patenteInput = document.getElementById('patente').value;
    var v = new Vehiculos();
    v.marca = marcaInput;
    v.modelo = modeloInput;
    v.patente = patenteInput;
    vehiculosArray.push(v);
    var listHTML = '<ul>';
    for (var _i = 0, vehiculos_1 = vehiculosArray; _i < vehiculos_1.length; _i++) {
        var vehiculo = vehiculos_1[_i];
        listHTML += "<li>".concat(vehiculo.marca, " ").concat(vehiculo.modelo, " ").concat(vehiculo.patente, "</li>");
    }
    listHTML += '</ul>';
    var listadoVehiculosDiv = document.getElementById('listadoVehiculos');
    if (listadoVehiculosDiv) { // Verificar si el elemento existe
        listadoVehiculosDiv.innerHTML = listHTML;
    }
    else {
        console.error("El elemento con ID 'listadoVehiculos' no se ha encontrado en el DOM.");
    }
}
