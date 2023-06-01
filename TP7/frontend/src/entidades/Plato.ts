import IngredienteCantidad from "./IngredienteCantidad";

 class Plato{
    id=0;
    imagenPath = "";
    nombre = "";
    precio=0;
    rubro = "";
    ingredientes:IngredienteCantidad[] = [];
    urlImagenPath = "";
}

export default Plato