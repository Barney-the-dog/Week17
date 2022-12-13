const numbers=document.querySelector('.numbers');
const doneBtn=document.querySelector('.done');
const min=document.querySelector('.min');
const max=document.querySelector('.max');
const sum=document.querySelector('.sum');
const multi=document.querySelector('.multi');
const average=document.querySelector('.average');

let arr=[];

function getRandom() {
    for (let i = 0; i < 10; i++) {
      let max = 10;
      let min = -10;
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    numbers.innerHTML = arr;

        let sumNumber = 0;
        for(let i = 0; i < arr.length; i++){
            sumNumber = sumNumber + arr[i];
            }
    sum.innerHTML='Cумма чисел: ' + sumNumber;

    let multiplyNumber = 1;
  for (let i = 0; i < arr.length; i++) {
    multiplyNumber = multiplyNumber * arr[i];
  }

  multi.innerHTML = "Умножение: " + multiplyNumber;

  average.innerHTML="Среднее арифметическое: " + sumNumber/10;

  let minNumber = Math.min.apply(null, arr);
  min.innerHTML = "Минимум: " + minNumber;

  let maxNumber = Math.max.apply(null, arr);
  max.innerHTML = "Максимум:" + maxNumber;

}
   
  