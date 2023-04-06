/*Describa que sucede al ejecutar el método skip() sobre una colección. Ejemplifique con la colección
países.


El método skip() se utiliza para omitir un número específico de documentos en una consulta. 
Por ejemplo, si tiene una colección de países y desea obtener los resultados de la página 2, 
puede saltar los primeros 10 documentos utilizando skip(10)

Lo probamos saltando los primeros 10 paises, en vez de arrancar por Argelia, arranca por Bahamas
*/

const { MongoClient } = require("mongodb");
const uri = "mongodb://root:root@localhost:27017/admin";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const saltarPrimerosDiez = async () => {
  try {
    await client.connect();
    const db = client.db("tp2Pais");
    const collection = db.collection("pais");

    const result = await collection.find().skip(10).sort({nombrePais:1}).toArray();

    console.log(result);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  } finally {
    await client.close();
  }
};

saltarPrimerosDiez();
