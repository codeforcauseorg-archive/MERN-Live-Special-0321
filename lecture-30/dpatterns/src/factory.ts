class Shape {
  getInfo = () => {
    console.log("I am of generic shape");
  };
}

class Circle extends Shape {
  getInfo = () => {
    console.log("I am of circular shape");
  };
}

class Square extends Shape {
  getInfo = () => {
    console.log("I am of square shape");
  };
}

class ShapeFactory {
  static create = (shape?: string): Shape => {
    if (shape === "square") {
      return new Square();
    } else if (shape === "circle") {
      return new Circle();
    }

    return new Shape();
  };
}

let s1 = ShapeFactory.create();
let s2 = ShapeFactory.create("square");
let s3 = ShapeFactory.create("circle");

s1.getInfo();
s2.getInfo();
s3.getInfo();
