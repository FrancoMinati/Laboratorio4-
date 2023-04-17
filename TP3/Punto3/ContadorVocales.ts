function contadorVocales (texto: string): void{
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
const textos = "Esto es una prueba de codigo";
contadorVocales(textos);