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
            }
            return accumulator;
        }, 0);
    }
}

