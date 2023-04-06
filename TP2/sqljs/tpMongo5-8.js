/*. Codifique un método que seleccione los documentos de la colección países ordenados por nombre
(name) en forma Ascendente. sort(). Muestre el resultado por pantalla o consola.*/

const { MongoClient } = require("mongodb");
const uri = "mongodb://root:root@localhost:27017/admin";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const ordenarPorNombreAscendente = async () => {
  try {
    await client.connect();
    const db = client.db("tp2Pais");
    const collection = db.collection("pais");

    const result = await collection.find().sort({ nombrePais: 1 }).toArray();

    console.log(result);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  } finally {
    await client.close();
  }
};

ordenarPorNombreAscendente();
