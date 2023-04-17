function contarVocales(texto){
const vocales = ['a', 'e', 'i', 'o', 'u'];
let contador = 0;

for(let i = 0; i < texto.length; i++){
    const char = texto[i].toLowerCase();
    if(vocales.includes(char)){
        contador++;
    }
}
console.log(`En el texto "${texto}" se encontraron: ${contador} vocales.`);
}
const texto = "Esto es una prueba de codigo";
contarVocales(texto);
