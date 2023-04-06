/*Codifique un método que seleccione los documentos de la colección países cuya población sea
mayor a 50000000 y menor a 150000000. Muestre el resultado por pantalla o consola*/
const poblacionesEntre = async () => {
    const { MongoClient } = require("mongodb");
    const uri = "mongodb://root:root@localhost:27017/admin";
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  
    try {
      await client.connect();
      const db = client.db("tp2Pais");
      const collection = db.collection("pais");
  
      const query = { poblacion: { $gt: 50000000 },poblacion:{$lt:150000000} };
      const result = await collection.find(query).toArray();
  
      console.log(result);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    } finally {
      await client.close();
    }
  };
  
  poblacionesEntre();