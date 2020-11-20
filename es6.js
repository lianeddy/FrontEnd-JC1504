var arr = [1, 2, 3];
console.log(arr.map((val) => val * 2));

var output = [];
for (let i = 0; i < arr.length; i++) {
  output.push(arr[i] * 2);
}
console.log(output);
arr.forEach((val) => {
  console.log(val);
});
console.log(arr);
