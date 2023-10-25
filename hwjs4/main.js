console.log("task1");

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }
  
  for (let i = 1; i <= 50; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
  
  console.log("task2");

  let N = prompt(50)
  if (N > 0) {
  for (let i = 1; i <= N; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      console.log(i);
    }
  }
} else {
  console.log("Пожалуйста, введите корректное положительное число.");
}

console.log("task3");

let num = [1,2,3,4,5,6,7,8,9,10]
    
for(let i = 0; i < num.length;i++) {
        console.log(num[i])
    }
    
console.log('task4');


let num1 = prompt('vedite chislo')
let result1 = 0
for(let i = 1; i <= num1; i++) {
    result1 += i
}

console.log(result1);

console.log('task5');

let tabl = 7

for(let i = 1; i <= 10; i++){
    let result2 = tabl * i 
    console.log(i+" * 7 = "+result2);
} 

console.log('task6');

let num3 = +prompt('vedite chislo')
let num4 = +prompt('vedite chislo')
for(let i = 1; i <= 1; i++){
    let res = num3 + num4
    console.log(res);
}

console.log('task7');

let symb = prompt('vedite chislo')
let res = ''
for(let i = 0; i < symb; i++) {
    res += "*"
    console.log(res)
}
