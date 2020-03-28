//    The Liskov Substitution Principle (LSP)
//    Принцип подстановки Барбары Лисков
//  "объекты в программе должны быть заменяемыми на экземпляры их подтипов
//       без изменения правильности выполнения программы"
//  Наследуемый класс должен дополнять, а не изменять базовый.

class Person {
    access() {
        console.log('У тебя есть доступ');
    }
}

class Frontend extends Person {
    canCreateFrontend() {
    }
}

class Backend extends Person {
    canCreateBackend() {
    }
}

class PersonFromDifferentCompany extends Person {
    access() {
        throw new Error('У тебя нет доступа! Иди к себе!');
    }
}

function openSecretDoor(person) {
    person.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
openSecretDoor(new PersonFromDifferentCompany());
