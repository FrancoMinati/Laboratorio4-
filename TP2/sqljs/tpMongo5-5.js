/*Codifique un método que elimine el documento de la colección países donde el código del país sea
258*/


const eliminarPais = async () => {
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
  
      const result = await collection.deleteOne({ codigoPais: "016" });
      console.log(result.deletedCount + " documento(s) eliminado(s)");
  
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    } finally {
      await client.close();
    }
  };
  
  eliminarPais();