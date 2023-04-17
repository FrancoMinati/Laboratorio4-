// Definición de la clase Cerveza
var Cervezas = /** @class */ (function () {
    function Cervezas() {
    }
    return Cervezas;
}());
// Realizar petición a la URL
fetch('https://random-data-api.com/api/beer/random_beer?size=25')
    .then(function (response) { return response.json(); })
    .then(function (data) {
    var cervezas = [];
    // Cargar la respuesta en un array de objetos Cerveza
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        var cerveza = new Cervezas();
        cerveza.id = item.id;
        cerveza.uid = item.uid;
        cerveza.brand = item.brand;
        cerveza.name = item.name;
        cerveza.style = item.style;
        cerveza.hop = item.hop;
        cerveza.yeast = item.yeast;
        cerveza.malts = item.malts;
        cerveza.ibu = item.ibu;
        cerveza.alcohol = item.alcohol;
        cerveza.blg = item.blg;
        cervezas.push(cerveza);
    }
    // Mostrar datos utilizando console.log
    for (var _a = 0, cervezas_1 = cervezas; _a < cervezas_1.length; _a++) {
        var cerveza = cervezas_1[_a];
        console.log("Brand: ".concat(cerveza.brand));
        console.log("Name: ".concat(cerveza.name));
        console.log("Style: ".concat(cerveza.style));
        console.log("IBU: ".concat(cerveza.ibu));
        console.log("Alcohol: ".concat(cerveza.alcohol));
        console.log('---');
    }
})
    .catch(function (error) { return console.error(error); });
