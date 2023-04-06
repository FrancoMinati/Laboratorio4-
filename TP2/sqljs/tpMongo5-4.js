/*Codifique un método que actualice el documento de la colección países donde el name sea Egypt,
cambiando el name a “Egipto” y la población a 95000000*/

const consultaActualizarEgipto = async () => {
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
  
      const query = { name: "Egypt"};
      const update = { $set: { name: "Egipto", poblacion: 95000000 } };

      const result = await collection.updateOne(query, update);
  
      console.log(result);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    } finally {
      await client.close();
    }
  };
  
  consultaActualizarEgipto();