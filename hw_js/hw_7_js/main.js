const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise выполнено");
    }, 2000);
  });
  
  myPromise.then((result) => {
    console.log(result);
  });
  







const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Произошла ошибка");
    }, 3000);
  });
  
  errorPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });









  function chetNum(number) {
    return new Promise((resolve, reject) => {
      if (number % 2 === 0) {
        resolve("Число четное");
      } else {
        reject("Число нечетное");
      }
    });
  }
  
  const inputNumber = 32; 
  chetNum(inputNumber)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  







    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        
    })





