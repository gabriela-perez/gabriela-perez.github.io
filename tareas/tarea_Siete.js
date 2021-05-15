//Tarea #7 -> Entrega lunes 26 a las 23:59:59 hrs.
//	Descubrir si una palabra es palindromo
//input: anna   output: Es un palindromo
//input: casa   output: No es un palindromo
//input: arribalabirra   output: Es un palindromo
let mainString = "carton";

function palindromo() {
  //console.log(typeof(minValue));
  let nature = mainString.split('');
  let reverseNature = nature.reverse();
  let reverseString = reverseNature.join('');

  if (mainString == reverseString) {
    console.log('Palindromo');
  } else {
    console.log('No Palindromo');
  }
  //console.log(nature);
  //console.log(reverseNature);

}
palindromo(mainString);
