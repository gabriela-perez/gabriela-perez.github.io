// Tarea #2
//	Hacer un factorial de cualquier número 'N'

let n = 5;
let k = 1;
const factorial = function (n){
  for (let i = 1; i <= n; i ++)
 k *= i;
    console.log(k);
    return k;
}

factorial(n);

module.exports = factorial
