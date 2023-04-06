/*5.6. Describa que sucede al ejecutar el método drop() sobre una colección y sobre una base de datos.

El método drop() es una operación de MongoDB que se utiliza para eliminar una colección o una base de datos completa.

Cuando se ejecuta drop() sobre una colección, se eliminarán todos los documentos que pertenecen a esa colección y la colección en sí misma.
Es decir, se elimina toda la información contenida en esa colección, y la colección ya no existirá en la base de datos.

Por otro lado, cuando se ejecuta drop() sobre una base de datos completa, se eliminarán todas las colecciones que pertenecen a esa base de datos 
y toda la información contenida en ellas. Es decir, se elimina toda la base de datos y todos los datos que se encontraban almacenados en ella. 
Esto incluye cualquier índice, función almacenada, usuario, roles, etc.*/
/*Codifique un método que elimine el documento de la colección países donde el código del país sea
258*/


const dropBD = async () => {
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
  
      db.dropDatabase();
  
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    } finally {
      await client.close();
    }
  };
  /*Codifique un método que elimine el documento de la colección países donde el código del país sea
258*/

const dropColeccion = async () => {
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
  
      await collection.drop();
  
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
    } finally {
      // no cerramos la conexión aquí, lo haremos más tarde
    }
    
    // cerramos la conexión después de eliminar la colección
    await client.close();
  };
  dropColeccion();

 