//Tarea #5 -> Entrega lunes 26 a las 23:59:59 hrs.
//	Contar el numero de vocales
//input: yurishi output: 3
let mainString = 'Gabriela';
let vowels = 'AEIOU';

function vowelCounter()
{
  let counter = 0;

  for(let i = 0; i < mainString.length ; i++)
  {
    if (vowels.toLowerCase().indexOf(mainString[i]) !== -1)
    {
      counter++;
    }
  }
  //return counter;
  console.log(counter);
}

vowelCounter(mainString);
module.exports = vowelCounter
