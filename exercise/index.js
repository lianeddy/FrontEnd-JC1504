// Menerima 2 argumen
// Return hasil tambah arr1 + arr2
// console.log(addArr([1,2,3], [4,5,6])) => 21
// console.log(addArr([1,10,100], [2,20,200])) => 333
// console.log(addArr([1,10,100,1000,10000], [2,20,200,2000,20000])) => 33333
function addArr(arr1, arr2) {
  var num = 0;
  // var newArr = [...arr1, ...arr2];
  // for (let i = 0; i < newArr.length; i++) {
  //   num += newArr[i];
  // }

  return arr1.reduce((a, b) => a + b) + arr2.reduce((a, b) => a + b);
}
// console.log(addArr([1, 2, 3], [4, 5, 6]));
// console.log(addArr([1, 10, 100], [2, 20, 200]));
// console.log(addArr([1, 10, 100, 1000, 10000], [2, 20, 200, 2000, 20000]));

// Terima 1 argumen number
// return hanya angka genap
// console.log(genap(20)) => 2,4,6,8,10,12,14,16,18,20
// console.log(genap(10)) => 2,4,6,8,10
// console.log(genap(14)) => 2,4,6,8,10,12,14
function genap(num) {
  // var output = "";
  var output = [];
  for (let i = 2; i <= num; i += 2) {
    output.push(i);
    // i !== num ? (output += `${i},`) : (output += `${i}`);
  }
  return output.join(",");
}
// console.log(genap(20));
// console.log(genap(10));
// console.log(genap(14));

// Terima 2 argumnen (arr1,arr2)
// Return array =>
// position([1,2,3], [4,5,6]) => [5,7,9]
// position([4,5,6], [7,8,9]) => [11,13,15]
// position([4,5,6,7,8], [7,8,9,10,11]) => [11,13,15,17,19]
// function position(arr1, arr2) {
//   let newArr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.push();
//   }
//   return newArr;
// }

// Terima 1 argumen (string)
// Setiap huruf di kelipatan kedua hurufnya diganti sama Z
// changeEven('lian') => 'lzaz'
// changeEven('bambang') => 'bzmzazg'
// changeEven('susilo') => 'szszlz'

function changeEven(str) {
  str = str.split("");
  for (let i = 1; i <= str.length; i += 2) {
    str[i] = "z";
  }
  return str.join("");
}

// console.log(changeEven("lian"));
// console.log(changeEven("bambang"));
// console.log(changeEven("susilo"));

// Terima 1 parameter (number)
// multiply(5) => 5*4*3*2*1 => 120
// multiply(4) => 4*3*2*1 => 24
// multiply(8) => 8*7*6*5*4*3*2*1 => 40320

function multiply(num) {
  var arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a + b);
}

// console.log(multiply(1));

// Terima 1 parameter (arr) [Number]
// Panjang arraynya bebas
// Rata-rata angka di dalam array
// [90,60,40,70,20] => 56
// <60 return "F"
// <70 return "D"
// <80 return "C"
// <90 return "B"
// <100 return "A"
// grades([90,60,40,70,20]) => "F"
// grades([90,90,90]) => "B"
// grades([50,100]) => "C"
