// Tarea #2
//	Hacer un factorial de cualquier número 'N'

let n = 5;
let k = 1;
function factorial(){
  for (let i = 1; i <= n; i ++)
 k *= i;
    console.log(k);
}

factorial(n);
