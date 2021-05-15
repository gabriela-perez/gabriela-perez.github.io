//Tarea #6 -> Entrega lunes 26 a las 23:59:59 hrs.
//	arreglo de numeros, dividirlos de 3 en 3 y imprimir el numero menor
//input: [765345324] output: 532
//paso 1: [ 765 345 324 ]
//paso mostrar el numero menor de cada tercio:
//input: [87654]  [876 54] output: 64
let mainArray =  [40, 100, 1, 5, 25, 10, 22,2,5];
let sizeSplit = 2;

function minimumValue()
{
  //console.log(typeof(minValue));
  for(let start = 0; start < mainArray.length; start = start + sizeSplit){
  let secondaryString = mainArray.slice(start, start + sizeSplit);
  let minValue = Math.min.apply(Math, secondaryString);
  console.log(minValue);
  }
}
minimumValue(mainArray);
