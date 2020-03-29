//    The Dependency Inversion Principle ( DIP )
//    Принцип инверсии зависимостей
//  Зависимость на абстракциях. Нет зависимости на что то конкретное.

class Fetch {
    request(url) {
        //return fetch(url).then(r => r.json());
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage';
        return dataFromLocalStorage;
    }
}

class Database {
    constructor() {
        //this.fetch = new Fetch();
        this.localStorage = new LocalStorage();
    }

    getData(){
        //return this.fetch.request('vk.com');
        return this.localStorage.get('ls key');
    }
}

const db = new Database();
console.log(db.getData());