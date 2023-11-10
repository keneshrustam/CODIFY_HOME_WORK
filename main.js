console.log('Задание 1: Деструктуризация объекта');
const person = {
    name: 'Alfredo',
    age: 544,
    citi: 'NewBish',
    gender: 'men',
    weight: 999,
    ros: 657,
    lang: 'js'
}
const { ...person1 } = person

console.log(person1);

console.log('Задание 2: Деструктуризация массива');

const mas = {
    neme: 'rustam',
    age: 18,
    citi: 'Bishkek',
    lang1: ['python','JS', 'ts', 'c++', 'c', 'c+', 'c#', 'R', 'CORE', 'PHP'],
    logMas:function() {
        const Mas = Object.values(this.lang1)
        console.log("Ваш масив " ,Mas);
    }
}
mas.logMas()

const {
    logMas,
    lang1: [lang1, , , , , , , , , lahg10],
    ...otherProps
} = mas
console.log(otherProps,"ferst elemnt - " ,lang1 ,"last elemnt - " , lahg10 );


// const array = [1,2,3,4,5]
// array.pop()
// console.log("метод pop",array);




console.log('Задание 3: Функция и деструктуризация');


const obj = {
    name: 'naruto',
    age: 32,
    soname: 'uzumaki',
    citi: 'konoha',
}

function getNameAgeOfUser(user){
    const {name, age, soname} = user;
    return `Name: ${name}, age: ${age}`
}
console.log(getNameAgeOfUser(obj));



console.log('Задание 4: Обмен значениями');

let a = 43;
let b = 34;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);



console.log('Задание 5: Вложенная деструктуризация');


const comp = {
    namecomp: 'holheym',
    addres: 'chuy 56/a',
    employees: {
        name1: 'lev',
        age1: 32,
        citi1: 'samara',
        name2: 'kesha',
        age2: 20,
        citi2: 'moskva',
        name3: 'pushkin',
        age3: 27,
        citi3: 'peterburg',
        name4: 'rustam',
        age4: 18,
        citi4: 'bishkek'
    }
}
const {namecomp, addres,  employees: {name1, age1, citi1}} = comp;
console.log(`Компание:${namecomp}`);
console.log(`Адрес:${addres}`);
console.log(`Певый сотредник:`)
console.log(`Имя:${name1}`);
console.log(`Возраст:${age1} `);
console.log(`Город Проживание:${citi1}`);
// console.log(`Компание${namecomp}, \n${addres}, \n${name1}, \n${age1}, \n${citi1}`)


console.log("Задание 6: Деструктуризация в цикле");

const students = [
    { name5: 'rusatm', age5: 18 },
    { name5: 'artur', age5: 18 },
    { name5: 'arsen', age5: 17 },
  ];
  
  for (const student of students) {
    const { name5, age5 } = student;
    console.log(`Студент: ${name5}, Возраст: ${age5} лет`);
  }
  