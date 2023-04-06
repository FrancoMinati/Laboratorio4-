/*Cree un nuevo índice para la colección países asignando el campo código como índice.
investigue createIndex())*/

/*Utilice el primer ejercicio pero le cree un indice al crear la collection para probar*/
const { MongoClient } = require("mongodb");

const uri = "mongodb://root:root@localhost:27017/admin";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const insertarDatos = async () => {
    const axios = require("axios");
    const { MongoClient } = require("mongodb");
  
    const fetchData = async (code) => {
      try {
        const response = await axios.get(
          `https://restcountries.com/v2/callingcode/${code}`
        );
        return response.data;
      } catch (error) {
        console.error(`Error fetching data for code ${code}:`, error.message);
        return null;
      }
    };
  
    const insertData = async (collection, countryData) => {
      const { numericCode, name, capital, region, population, latlng } =
        countryData;
      const [lat, lng] = latlng;
  
      await collection.insertOne({
        codigoPais: numericCode,
        nombrePais: name,
        capitalPais: capital,
        region: region,
        poblacion: population,
        latitud: lat,
        longitud: lng,
      });
    };
  
    const main = async () => {
      const uri = "mongodb://root:root@localhost:27017/admin";
      const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
  
      try {
        await client.connect();
        const db = client.db("tp2Pais");
  
        // Comprobar si la colección ya existe
        const collections = await db.listCollections().toArray();
        const collectionNames = collections.map((c) => c.name);
        if (!collectionNames.includes("pais")) {
          // Si la colección no existe, crearla
          await (await db.createCollection("pais")).createIndex({nombrePais:1});
          console.log("La colección pais fue creada exitosamente.");
        } else {
          console.log("La colección pais ya existe. Utilizando la colección existente.");
        }
  
        const collection = db.collection("pais");
  
  
        for (let code = 1; code <= 300; code++) {
          console.log(`Fetching data for code ${code}...`);
  
          const data = await fetchData(code);
  
          if (data && data.length > 0) {
            for (const countryData of data) {
              try {
                await insertData(collection, countryData);
                console.log(`Inserted data for ${countryData.name} (code ${code})`);
              } catch (error) {
                console.error(
                  `Error inserting data for ${countryData.name} (code ${code}):`,
                  error.message
                );
              }
            }
          }
        }
      } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
      } finally {
        await client.close();
      }
    }
    main();
  }
  insertarDatos();



