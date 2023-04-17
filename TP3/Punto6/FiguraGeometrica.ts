class FiguraGeometrica {
    protected base: number;
    protected altura: number;
  
    constructor(base: number, altura: number) {
      this.base = base;
      this.altura = altura;
    }
  
    calcularArea(): number {
      return this.base * this.altura;
    }
  }
  
  class Rectangulo extends FiguraGeometrica {
    constructor(base: number, altura: number) {
      super(base, altura);
    }
  
    calcularArea(): number {
      return this.base * this.altura;
    }
  }
  
  class Triangulo extends FiguraGeometrica {
    constructor(base: number, altura: number) {
      super(base, altura);
    }
  
    calcularArea(): number {
      return (this.base * this.altura) / 2;
    }
  }

//RECTANGULO

const rectangulo = new Rectangulo(5, 10);

const areaRectangulo = rectangulo.calcularArea();

console.log(`Área del rectángulo: ${areaRectangulo}`); // Área del rectángulo: 50

// TRIANGULO
const triangulo = new Triangulo(8, 6);

const areaTriangulo = triangulo.calcularArea();

console.log(`Área del triángulo: ${areaTriangulo}`); // Área del triángulo: 24