//    The Open Closed Principal (OCP)
//    Принцип Открытости/Закрытости:
//  Программные сущности ... должны быть открыты для расширения, но закрыты для модификации

class Shape {
    area() {
        throw new Error('Area method should be implemented');
    }
}

class Square extends Shape {
    constructor(size) {
        super();
        this.size = size;
    }

    area() {
        return this.size ** 2;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return (this.radius ** 2) * Math.PI;
    }
}

class Rect extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

// Rectangular triangle
class Triangle extends Shape {
    constructor(a, b) {
        super();
        this.a = a;
        this.b = b;
    }

    area() {
        return (this.a * this.b) / 2;
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((accumulator, shape) => {
            accumulator += shape.area();
            return accumulator;
        }, 0);
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5),
    new Rect (10,20),
    new Triangle(10, 15)
]);

const calc1 = new AreaCalculator([
    new Square(10)
]);

const calc2 = new AreaCalculator([
    new Rect(20, 10)
]);

console.log(calc.sum());
console.log(calc1.sum());
console.log(calc2.sum());