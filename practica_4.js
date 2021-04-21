
// for var
for (var i = 0; i<5; i++){
  console.log(`más 1 ${i}`)
}

//for array - posiciones del arreglo
let a = [5,2,1];

for (let j = 0; j < [3]; j++){
  console.log("contenido de la posición en el arreglo",a[j])
}

//for array - contenido del arreglo

let b = [1,2,3];
for (let k = 0; k < [3]; k++){
  console.log("elementos en el arreglo",b.k)
}




//while



// Switch  - Case
var rank = "Commander";
switch(rank)
{
    case "Private":
        console.log("You are not authorized.");
        break;
    case "Sergeant":
        console.log("You are not authorized.");
        break;
    case "Commander":
        console.log("Hello commander! what can I do for you today?");
        break;
    case "Captain":
        console.log("Hello captain! I will do anything you wish.");
        break;
    default:
        console.log("I don't know what your rank is.");
        break;
}
