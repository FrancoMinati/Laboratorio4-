// Definición de la clase Cerveza
class Cerveza {
    id: number;
    uid: string;
    brand: string;
    name: string;
    style: string;
    hop: string;
    yeast: string;
    malts: string;
    ibu: string;
    alcohol: string;
    blg: string;

  }
  
  // Realizar petición a la URL
  fetch('https://random-data-api.com/api/beer/random_beer?size=25')
    .then(response => response.json())
    .then(data => {
      const cervezas: Cerveza[] = [];
  
      // Cargar la respuesta en un array de objetos Cerveza
      for (const item of data) {
        const cerveza = new Cerveza();
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
      for (const cerveza of cervezas) {
        console.log(`Brand: ${cerveza.brand}`);
        console.log(`Name: ${cerveza.name}`);
        console.log(`Style: ${cerveza.style}`);
        console.log(`IBU: ${cerveza.ibu}`);
        console.log(`Alcohol: ${cerveza.alcohol}`);
        console.log('---');
      }
    })
    .catch(error => console.error(error));
  