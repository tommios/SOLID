//    The Open Closed Principal (OCP)
//    Принцип Открытости/Закрытости:
//  Программные сущности ... должны быть открыты для расширения, но закрыты для модификации

class Square {
    constructor(size) {
        this.type = 'square';
        this.size = size;
    }
}

class Circle {
    constructor(radius) {
        this.type = 'circle';
        this.radius = radius;
    }
}

class Rect {
    constructor(width, height) {
        this.type = 'rect';
        this.width = width;
        this.height = height;
    }
}

class AreaCalculator {
    constructor(shapes = []) {
        this.shapes = shapes;
    }

    sum() {
        return this.shapes.reduce((accumulator, shape) => {
            if (shape.type === 'circle') {
                accumulator += (shape.radius ** 2) * Math.PI;
            } else if (shape.type === 'square') {
                accumulator += shape.size ** 2;
            } else if (shape.type === 'rect') {
                accumulator += shape.width * shape.height;
            }

            return accumulator;
        }, 0);
    }
}

const calc = new AreaCalculator([
    new Square(10),
    new Circle(1),
    new Circle(5)
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