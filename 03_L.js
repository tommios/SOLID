//    The Liskov Substitution Principle (LSP)
//    Принцип подстановки Барбары Лисков
//  "объекты в программе должны быть заменяемыми на экземпляры их подтипов
//       без изменения правильности выполнения программы"
//  Наследуемый класс должен дополнять, а не изменять базовый.

class Person {

}

class Member extends Person {
    access() {
        console.log('У тебя есть доступ');
    }
}

class Guest extends Person {
    isGuest = true;
}

class Frontend extends Member {
    canCreateFrontend() {
    }
}

class Backend extends Member {
    canCreateBackend() {
    }
}

class PersonFromDifferentCompany extends Guest {
    access() {
        throw new Error('У тебя нет доступа! Иди к себе!');
    }
}

function openSecretDoor(member) {
    member.access();
}

openSecretDoor(new Frontend());
openSecretDoor(new Backend());
// openSecretDoor(new PersonFromDifferentCompany()); // There should be member!

// =========================================
// =============== Example 2 ===============
// =========================================

class Component {
    isComponent = true
}

class ComponentWithTemplate extends Component {
    render() {
        return `<div>Component</div>`
    }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
    onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
    afterInit() {}
}

class HOC extends HigherOrderComponent {
    render() {
        throw new Error('Render is impossible here')
    }

    wrapComponent(component) {
        component.wrapped = true
        return component
    }
}

function renderComponent(component) {
    console.log(component.render())
}


renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())