//Tarea #8 -> Entrega lunes 26 a las 23:59:59 hrs.
//	Mejorar ésta función https://qamindscommunity.slack.com/archives/C01U15LEKDJ/p1619144343001600

/*function vocales(cadena){
    var n = cadena.length;
    var countVocal=0;
    var countConst=0;
    for(var i=0; i<n ; i++){
        var x = cadena.charAt(i).toLowerCase();
        if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u')
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
};
console.log('Vocales y Consonantes ' + vocales('tyes'))
console.log('Vocales y Consonantes ' + vocales('YUIRSHI'))
console.log('Vocales y Consonantes ' + vocales('casa'))

function letter_indexof(cadena) {
    var n = cadena.length;
    var vocales = ["a","e","i","o","u"];
    var countVocal=0;
    var countConst=0;
    for(var i=0; i<n ; i++){
        if (vocales.indexOf(cadena.charAt(i).toLowerCase()) >= 0)
            countVocal++;
        else
            countConst++;
    }
    return [countVocal,countConst++];
}
console.log('Vocales y Consonantes ' + letter_indexof('tyes'))
console.log('Vocales y Consonantes ' + letter_indexof('YUIRSHI'))
console.log('Vocales y Consonantes ' + letter_indexof('casa'))
*/


let mainString = 'Zanahoria';
let vowels = 'AEIOU';

function vowelCounter()
{
  let counterVowels = 0;
  let counterConsonants = 0;

  for(let i = 0; i < mainString.length ; i++)
  {
    if (vowels.toLowerCase().indexOf(mainString[i]) !== -1)
    {
      counterVowels++;
    }
    else {
      counterConsonants++;
    }
  }

  let cadena =`Vocales ${counterVowels} Consonantes ${counterConsonants}`;
  console.log(cadena);
  return cadena;
}

vowelCounter(mainString);
module.exports = vowelCounter();
