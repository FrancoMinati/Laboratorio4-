/*
En MongoDB, las expresiones regulares se utilizan para buscar patrones en campos de texto. 
Las expresiones regulares se crean utilizando el objeto RegExp de JavaScript y 
se utilizan en combinación con el operador $regex en las consultas de MongoDB.

Por ejemplo, si queremos buscar todos los países cuyo nombre contenga la cadena "gen", 
podemos usar una expresión regular en una consulta de MongoDB:

db.paises.find({ nombrePais: { $regex: /gen/ } })
Esto buscará todos los documentos en la colección paises cuyo campo nombrePais contenga la cadena "gen".

En SQL, la cláusula LIKE se utiliza para buscar patrones en campos de texto. 
Por ejemplo, para buscar todos los países cuyo nombre contenga la cadena "gen", podemos usar la siguiente consulta:

SELECT * FROM paises WHERE nombrePais LIKE '%gen%'
Aquí, el carácter % se utiliza como comodín para buscar cualquier cadena de caracteres que contenga la subcadena "gen".

En resumen, el uso de expresiones regulares en MongoDB puede reemplazar el uso de la cláusula LIKE de SQL para buscar patrones en campos de texto.
Las expresiones regulares son más flexibles y potentes que la cláusula LIKE, ya que permiten buscar patrones más complejos y específicos.

Dejo el codigo en Mongo para ver que devuelve Argentina*/

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

    const result = await collection.find({ nombrePais: { $regex: /gen/ }}).toArray();

    console.log(result);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  } finally {
    await client.close();
  }
};

saltarPrimerosDiez();
