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

class FetchClient {
    constructor() {
        this.fetch = new Fetch();
    }

    clientGet(key) {
        return this.fetch.request(key);
    }
}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.localStorage.get(key);
    }
}

class Database {
    constructor(client) {
        this.client = client;
    }

    getData(key) {
        return this.client.clientGet(key);
    }
}

const db = new Database(new LocalStorageClient());
console.log(db.getData('random'));

console.log();

const db1 = new Database(new FetchClient());
console.log(db1.getData('vk.com'));
