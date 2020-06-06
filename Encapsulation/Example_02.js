// Инкапсуляция в JavaScript

// Использование приватных полей

//   Приватные поля стали доступны в babel с включенной функцией stage-3.
//   Они так же поддерживаются в Chrome, Opera, браузере Android и Chrome для Android,
// поэтому можно сделать что-то вроде этого:

class Counter {
  #count = 0;

  click() {
    this.#count += 1;
  }
  getCount() {
    return this.#count.toLocaleString();
  }
}

const myCounter = new Counter();

myCounter.click();
myCounter.click();
myCounter.click();

console.log(myCounter.getCount()); // 3

console.log(myCounter.#count); // SyntaxError: Private field '#count' must be declared in an enclosing class
