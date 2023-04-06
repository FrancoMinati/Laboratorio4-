/*. Codifique un método que seleccione los documentos de la colección países donde la región sea
Americas y la población sea mayor a 100000000. Muestre el resultado por pantalla o consola.*/
const consultaAmericasPoblacion = async () => {
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
  
      const query = { region: "Americas", poblacion: { $gt: 100000000 } };
      const result = await collection.find(query).toArray();
  
      console.log(result);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    } finally {
      await client.close();
    }
  };
  
  consultaAmericasPoblacion();