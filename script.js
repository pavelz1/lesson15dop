'use strict';

class First {
  constructor(hello) {
    this.hello = hello;
  }
  speak(phrase) {
    return `${this.hello}`;
  }
}

class Second extends First {
  speak(hello) {
    console.log(`${super.speak(hello)}`);
  }
}
const first = new First('Привет я метод родителя!');
const second = new Second('А я наследуемый метод!');
first.speak('Привет я метод родителя!');
console.log(first.speak('Привет я метод родителя!'));
second.speak('А я наследуемый метод!');





/* Инкапсуляция есть ни что иное, как реализация приватности. В JavaScript подобная концепция реализуется благодаря функциям и их областям видимости. */
// var Peron = (function () {
//   // Приватная функция
//   var log = function (message) {
//     console.log(message);
//   };

//   var Person = function (name) {
//     // Публичное свойство
//     this.name = name;
//   };

//   // Публичный метод
//   Person.prototype.logger = function (message) {
//     log('Public ' + message);
//   };

//   // Экспорт публичной функции
//   return Person;
// })();


// Наследование
/* С помощью наследования вы, буквально, говорите: “У меня есть один конструктор/класс и другой конструктор/класс, который точно такой же, как и первый, кроме вот этого и вот этого”. Чаще всего наследование в JavaScript реализуется с помощью функции Object.create(), позволяющий создать новый объект с заданным прототипом. */
// Дед попугай с двумя лапами
// var ParrotGrandfather = function () { };
// ParrotGrandfather.prototype = {
//   species: 'Parrot',
//   paws: 2
// };

// // Отец попугай унаследовал всё у деда
// var ParrotFather = function () { };
// ParrotFather.prototype = Object.create(ParrotGrandfather.prototype);

// // Сын попугай унаследовал всё у отца
// var ParrotSon = function () { };
// ParrotSon.prototype = Object.create(ParrotFather.prototype);

// var grandfather = new ParrotGrandfather();
// var father = new ParrotFather()
// var son = new ParrotSon();

// console.log(grandfather.species, father.species, son.species);
// // Parrot Parrot Parrot - все попугаи!
// console.log(grandfather.paws, father.paws, son.paws);
// // 2 2 2 - у каждого по 2 лапы

// // Дед меняет количество лап
// ParrotGrandfather.prototype.paws++;
// console.log(grandfather.paws, father.paws, son.paws);
// // 3 3 3 - у каждого теперь по 3 лапы

// // Отец меняет вид
// ParrotFather.prototype.species = 'eagle';
// console.log(grandfather.species, father.species, son.species);
// // Parrot eagle eagle - дед остался попугаем, отец и сын стали орлами

// // Сын уменьшил количество лап
// ParrotSon.prototype.paws--;
// console.log(grandfather.paws, father.paws, son.paws);
// // 3 3 2 - дед и отец остались при своих трёх лапах

// // Дед решил стать чайкой
// ParrotGrandfather.prototype.species = 'seagull';
// console.log(grandfather.species, father.species, son.species);
// // seagull eagle eagle - дед чайка, отец и сын орлы

// Полиморфизм
/* Полиморфизм проще всего постичь на примере встроенных конструкторов (String, Array, Object…). Вот если вас спросят: “Чем число 42 отличается от массива [4, 2] и что у них общего?”, чтобы вы ответили? Наверняка, вы были начали рассказывать про примитивы и объекты, чем они отличаются, что можно делать с теми и другими, на вопрос про отличия. Но чем они похожи друг на друга? Абсолютно разные же типы данных! Но, очевидно, что они разделяют определённую часть методов, например, метод toString, унаследованный от Object. Это уже полиморфизм? Ещё нет, но мы уже близко. Метод toString можно весьма успешно переназначить, во-первых, в прототипе функции конструктора, и, во-вторых, сразу же для данного конкретного объекта. */
// Наш собственный конструктор
// var Person = function (name) {
//   this.name = name;
// };

// Переназначение метода toString для всех объектов,
// созданных с помощью данного конструктора
// Person.prototype.toString = function () {
//   return 'Person ' + this.name;
// };

// var john = new Person('John');

// // Два массива, второй абсолютно обычный, 
// // для первого переназначен метод toString
// var arr1 = [4, 2];
// var arr2 = [5, 3];
// arr1.toString = function () {
//   return 'Array ' + this.reduce(function (result, item) {
//     return result + '' + item;
//   });
// };

// // В итоге
// console.log(john.toString()); // Person John
// console.log(arr1.toString()); // Array 42
// console.log(arr2.toString()); // 5,3


// Классы
/*Итак, выше вы уже достаточно насмотрелись примеров конструкторов, свойств и методов, которыми мы пользовались до выхода в свет нового стандарта.Не буду вас больше томить ожиданием и сразу перейдём к коду:*/

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     console.log(`Person ${this.name} said his name`);
//   }
// }

// const john = new Person('John');
// john.sayName(); // Person John said his name

// Пример выше можно записать в стиле ES5 следующим образом:
// let Person = function (name) {
//   this.name = name;
// };

// Person.prototype.sayName = function () {
//   console.log('Person ' + this.name + ' said his name');
// };
// let john = new Person('John');
// john.sayName(); // Person John said his name

// extends
/*ES6 классы также обладают синтаксическим сахаром для реализации прототипного наследования.Для подобных целей используется extends:*/
// class GreatPerson extends Person {
//   constructor(name, phrase) {
//     super(name);
//     this.phrase = phrase;
//   }
//   sayPhrase() {
//     console.log(`${this.name} says: "${this.phrase}"`)
//   }
// }

// const jane = new Person('Jane', 'Hello, World!');
// jane.sayName(); // Person Jane said his name
// jane.sayPhrase(); // Jane says: "Hello, World!"

// super
/* В примере выше мы использовали super для вызова конструктора - родителя.С помощью подобного вызова мы записали свойство name для текущего объекта.Другуми словами, всё, что делает super при вызове внутри конструктора(свойства constructor) — вызывает конструктор родителя и записывает в текущий объект(то есть в this) всё, что от него требуется.В ES5 для подобных действий приходилось напрямую обращаться к конструктору: */

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   speak(phrase) {
//     return `${this.name} says ${phrase}`;
//   }
// }

// class Speaker extends Person {
//   speak(phrase) {
//     console.log(`${super.speak(phrase)} very confidently`);
//   }
// }

// const bob = new Speaker('Bob');
// const john = new Person('John');
// console.log(john.speak('I don\'t have a lot of money'));
// // John says "I don't have a lot of money"
// bob.speak('I have a lot of money');
// // Bob says "I have a lot of money" very confidently

