// three Company
let iterable = "ty";
let n=5;
for (let value of iterable) {
  console.log(value.repeat(n));
}

// count vocals
var posicion = [];
var palabra = "gallinazo"
var element = 'a';
var idx = palabra.indexOf(element);
while (idx != -1) {
  posicion.push(idx);
  idx = palabra.indexOf(element, idx + 1);
}
console.log(posicion.length);
