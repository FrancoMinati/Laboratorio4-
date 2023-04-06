//Codifique un método que seleccione los documentos de la colección países donde la región sea
//Americas. Muestre el resultado por pantalla o consola.

const consultaAmericas = async () => {
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
  
      const query = { region: "Americas" };
      const result = await collection.find(query).toArray();
  
      console.log(result);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    } finally {
      await client.close();
    }
  };
  
  consultaAmericas();