//    The Interface Segregation Principle
//    Принцип разделения интерфейса
//  "много интерфейсов, специально предназначенных для клиентов, лучше,
//     чем один интерфейс общего назначения.

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//
//     walk() {
//         console.log(`${this.name} умеет ходить`);
//     }
//
//     swim() {
//         console.log(`${this.name} умеет плавать`);
//     }
//
//     fly() {
//         console.log(`${this.name} умеет летать`);
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null;
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null;
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null;
//     }
//
//     walk() {
//         return null;
//     }
// }

// ==================================================
// ==================================================

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} умеет плавать`);
    }
}

const flier = {
    fly() {
        console.log(`${this.name} умеет летать`);
    }
}

const walker = {
    walk() {
        console.log(`${this.name} умеет ходить`);
    }
}

class Dog extends Animal {
}

class Eagle extends Animal {
}

class Whale extends Animal {
}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);
Object.assign(Whale.prototype, swimmer);

console.log();
const dog = new Dog('Рекс');
dog.walk();
dog.swim();
//dog.fly();

console.log();
const eagle = new Eagle('Орел');
eagle.fly();
//eagle.swim();
eagle.walk();

console.log();
const whale = new Whale('Большой синий друг :)');
//whale.fly();
whale.swim();
//whale.walk();
