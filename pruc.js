const maleNames = [
  "José", "Juan", "Luis", "Carlos", "Miguel", "Francisco", "Antonio", "Jorge", "Manuel", "Roberto",
  "Fernando", "Ricardo", "Alejandro", "Sergio", "Eduardo", "Pedro", "Jesús", "Arturo", "Rafael", "Héctor",
  "Alfredo", "Raúl", "Julio", "Mario", "Enrique", "Óscar", "Rubén", "Guillermo", "Víctor", "Andrés",
  "Javier", "Ramón", "Ángel", "Diego", "Hugo", "Adrián", "Gerardo", "Joel", "Félix", "Leonardo",
  "Pablo", "Martín", "Emilio", "Salvador", "Eugenio", "Gustavo", "Ignacio", "Cristian", "Alberto", "Tomás",
  "Nicolás", "Mauricio", "Aníbal", "Esteban", "Simón", "Iván", "Felipe", "Patricio", "Rubén", "Marcelo",
  "Bernardo", "Elías", "César", "Rodolfo", "Israel", "David", "Sebastián", "Álvaro", "Maximiliano", "Darío", "Rodrigo",
  "Mateo", "Fabián", "León", "Ismael", "Adolfo", "Teodoro", "René", "Armando", "Ezequiel", "Orlando",
  "Baltazar", "Rodolfo", "Gonzalo", "Camilo", "Benjamín", "Guadalupe", "Joaquín", "Marcos", "Cristóbal", "Gilberto",
  "Josué", "Humberto", "Amado", "Abel", "Ulises", "Ramiro", "Alonso", "Maurilio", "Luciano", "Julián",
  "Raúl", "Mariano", "Celestino", "Saúl", "Guillermo", "Flavio", "Salvador", "Cipriano", "Baltazar", "Anastasio",
  "Leandro", "Tadeo", "Octavio", "Valentín", "Emanuel", "Hernán", "Marcelino", "Hilario", "Eleazar", "Romeo",
  "Matías", "Simón", "Rafael", "Domingo", "Ariel", "Fidel", "Isaías", "Ernesto", "Bernabé", "Osvaldo",
  "Iván", "Efraín", "Jairo", "Gregorio", "Edgar", "Bruno", "Aarón", "Eliseo", "Noé", "Gaspar",
  "Francisco Javier", "Luis Ángel", "José Ángel", "Luis Miguel", "Carlos Alberto", "José Luis", "Juan Pablo", "José María", "Juan Manuel", "José Antonio"
];
const femaleNames = [
  "María", "Ana", "Guadalupe", "Sofía", "Isabel", "Gabriela", "Fernanda", "Rosa", "Laura", "Beatriz",
  "Andrea", "Claudia", "Verónica", "Carmen", "Carla", "Diana", "Paola", "Patricia", "Mónica", "Alejandra",
  "Yolanda", "Jessica", "Nancy", "Daniela", "Mariana", "Silvia", "Lucía", "Sandra", "Lorena", "Adriana",
  "Victoria", "Liliana", "Pilar", "Elsa", "Sara", "Cynthia", "Fabiola", "Susana", "Estela", "Irene",
  "Leticia", "Tania", "Eva", "Magdalena", "Martha", "Angélica", "Amalia", "Rebeca", "Ximena", "Valeria",
  "Itzel", "Melissa", "Cristina", "Elena", "Norma", "Clara", "Irma", "Carolina", "Gloria", "Nadia",
  "Violeta", "Teresa", "Flor", "Alicia", "Erika", "Araceli", "Esther", "Brenda", "Bárbara", "Cecilia",
  "Raquel", "Ariadna", "Lilith", "Marisol", "Edith", "Yadira", "Ruth", "Graciela", "Natalia", "Selene",
  "Ángela", "Elvira", "Lourdes", "Ofelia", "Blanca", "Julieta", "Hilda", "Perla", "Guillermina", "Carmen",
  "Olga", "Francisca", "Yazmín", "Antonia", "Regina", "Socorro", "Miriam", "Tatiana", "Samantha", "Ivonne",
  "Georgina", "Evelyn", "Lucero", "Camila", "Michelle", "Inés", "Yesenia", "Nora", "Elsa", "Janeth",
  "Pamela", "Rocío", "América", "Consuelo", "Manuela", "Anabel", "Azucena", "Vanessa", "Maribel", "Esmeralda",
  "Maritza", "Mirna", "Tamara", "Aurora", "Genoveva", "Renata", "Aleida", "Juliana", "Montserrat", "Irma",
  "Glenda", "Rosalía", "Ivette", "Noemí", "Lilia", "Ágata", "Helena", "Margarita", "Isadora", "Paulina",
  "Daniela", "Silvana", "Luz", "Eugenia", "África", "Jazmín", "Alma", "Micaela", "Eloisa", "Angélica",
  "Elisabeth", "Zulema", "Marina", "Aitana", "Belén", "Celeste", "Alejandra", "Carmina", "Araceli", "Sabrina",
  "Lorena", "Patricia", "Anahí", "Magali", "Ema", "Xóchitl", "Paz", "Nelly", "Lucrecia", "Rafaela",
  "Aida", "Amaranta", "Viridiana", "Mariana", "Cinthia", "Claudia", "Silvia", "Dulce", "Paloma", "Lisset",
  "Lía", "Marifer", "Érika", "Alina", "Marina", "Marisa", "Lupita", "María José", "Mía", "Alondra"
];
const lastNames = [
  "Hernández", "García", "Martínez", "López", "González", "Pérez", "Rodríguez", 
  "Sánchez", "Ramírez", "Cruz", "Flores", "Gómez", "Torres", "Díaz", "Morales",
  "Álvarez", "Ortiz", "Vázquez", "Jiménez", "Castillo", "Domínguez", "Reyes", 
  "Ruiz", "Chávez", "Mendoza", "Aguilera", "Ramos", "Guerrero", "Vargas", "Silva",
  "Rivera", "Romero", "Herrera", "Cortés", "Navarro", "Gutiérrez", "Delgado",
  "Pineda", "Rojas", "Valencia", "Cervantes", "Espinoza", "Mejía", "Velázquez",
  "Campos", "Soto", "Bautista", "Pacheco", "Salazar", "Santos","Saavedra", "Nieto", 
  "Carrillo", "Márquez", "Ortega", "Escobar", "Padilla", "León", "Fuentes",
  "Vega", "Ávila", "Peña", "Villanueva", "Castro", "Luna", "Sandoval", 
  "Paredes", "Acosta", "Montes", "Gallegos", "Rivas", "Juárez", "Solís", 
  "Núñez", "Ponce", "Calderón", "Ángeles", "Figueroa", "Beltrán", "Alvarado", 
  "Aguirre", "Molina", "Muñoz", "Palacios", "Blanco", "Tapia", "Zamora", 
  "Correa", "Medina", "Cuevas", "Quintero", "Valdez", "Lara", "Landa", 
  "Estrada", "Escalante", "Villalobos", "Galván", "Orozco", "Barajas", 
  "Cano", "Osorio", "Ibarra", "Villarreal", "Ledesma", "Montoya", "Arenas", 
  "Durán", "Landa", "Quiroga", "Zapata", "Becerra", "Carbajal", "Castañeda", 
  "Macías", "Godínez", "Cardenas", "Trejo", "Zúñiga", "Cabrera", "Terán", 
  "Bravo", "Salinas", "Arce", "Lozano", "Pinedo", "Franco", "Echeverría", "Arellano", 
  "Robles", "Villaseñor", "Ochoa", "Velasco", "Rosales", "Vallejo", "Cedillo", 
  "Maldonado", "Serrano", "Miranda", "Camacho", "Araiza", "Moreno", "Escoto", 
  "Carranza", "Del Villar", "Del Río", "Belmont", "Chaparro", "Coronel", 
  "Llamas", "Abarca", "Albarrán", "Balderas", "Barragán", "Benítez", "Bernal", 
  "Bojorquez", "Burgos", "Cervera", "Collado", "Del Olmo", "Del Real", 
  "Duque", "Enciso", "Esquivel", "Eslava", "Farfán", "Góngora", "Grimaldo", 
  "Haro", "Iturbe", "Izaguirre", "Jáuregui", "Kuri", "Landero", "Leyva", 
  "Lomelí", "Machado", "Magaña", "Manjarrez", "Mayorga", "Meléndez", 
  "Monroy", "Montejo", "Mondragón", "Ocampo", "Olivares", "Pache", "Portilla", 
  "Puente", "Quiñones", "Regalado", "Reynoso", "Rico", "Rincón", "Ríos", 
  "Román", "Rubio", "Saavedra", "Salgado", "Salmerón", "Santana", "Sarabia", 
  "Sepúlveda", "Téllez", "Toledo", "Trujillo", "Uribe", "Urrutia", "Vargas", 
  "Vergara", "Villa", "Villaseca", "Xochitl", "Yañez", "Zárate", "Zepeda", 
  "Zubia", "Quintana", "Bazán", "Huerta", "Arriaga", "Betancourt", "Arroyo", 
  "Barrón", "Cerón", "Del Castillo", "Del Ángel", "Escobedo", "Farías", 
  "Flores", "Gámez", "Hidalgo", "Jurado", "Larios", "Marroquín", "Montero", 
  "Nogales", "Ornelas", "Peralta", "Prado", "Rentería", "Rocha", "Salcido", 
  "Silvestre", "Tobar", "Tovar", "Uriarte", "Villafaña", "Yescas", "Zapien", 
  "Lara", "León", "Linares"
];

const readline = require('readline');
function extractDataFromCURP(curp) {
  const regex = /^[A-Z]{4}\d{6}[HM][A-Z]{2}[A-Z0-9]{3}[0-9A-Z]{1,2}$/;

  if (!regex.test(curp)) {
    throw new Error("CURP no válido");
  }

  const firstLastNameInitial = curp.charAt(0).toUpperCase();
  const firstLastNameVowel = curp.charAt(1).toUpperCase();
  const secondLastNameInitial = curp.charAt(2).toUpperCase();
  const firstNameInitial = curp.charAt(3).toUpperCase();

  const year = parseInt(curp.slice(4, 6), 10) + (curp.slice(4, 6) < "30" ? 2000 : 1900);
  const month = curp.slice(6, 8);
  const day = curp.slice(8, 10);
  const gender = curp[10].toLowerCase();
  const birthDate = `${day}-${month}-${year}`;

  function findLastName(initial, firstVowel) {
    const vowelRegex = /[AEIOU]/i;
    return lastNames.find(lastName => {
      const nameInitial = lastName.charAt(0).toUpperCase();
      const nameFirstVowel = lastName.slice(1).match(vowelRegex)?.[0]?.toUpperCase();
      return nameInitial === initial && nameFirstVowel === firstVowel;
    });
  }

  const namesArray = gender === "h" ? maleNames : femaleNames;
  const filteredFirstNames = namesArray.filter(firstname => firstname.charAt(0).toUpperCase() === firstNameInitial);
  const firstname = filteredFirstNames[Math.floor(Math.random() * filteredFirstNames.length)];

  const lastname = findLastName(firstLastNameInitial, firstLastNameVowel);
  const filteredLastNames = lastNames.filter(lastname => lastname.charAt(0).toUpperCase() === secondLastNameInitial);
  const motherLastname = filteredLastNames[Math.floor(Math.random() * filteredLastNames.length)];

  return {
    firstname,
    lastname,
    mother_lastname: motherLastname,
    birth_date: birthDate,
    gender
  };
}

function createAccountJSON(curp) {
  const data = extractDataFromCURP(curp);
  const accountType = Math.random() < 0.5 ? "lite" : "black";

  return JSON.stringify({
    function: "create_account",
    data: {
      account_type: accountType,
      ...data
    }
  }, null, 2);
}

function generateRandomCURP() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const digits = "0123456789";
  const gender = Math.random() < 0.5 ? "H" : "M";
  const state = "DF"; // Example state code
  const randomLetter = () => letters.charAt(Math.floor(Math.random() * letters.length));
  const randomDigit = () => digits.charAt(Math.floor(Math.random() * digits.length));

  const today = new Date();
  const year = today.getFullYear() - Math.floor(Math.random() * 100);
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const curp = `${randomLetter()}${randomLetter()}${randomLetter()}${randomLetter()}${String(year).slice(2)}${month}${day}${gender}${state}${randomLetter()}${randomLetter()}${randomLetter()}${randomDigit()}`;
  return curp;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log("Opciones:");
  console.log("1. Generar un CURP aleatorio y válido");
  console.log("2. Ingresar un CURP y obtener datos que coincidan con el CURP en el formato JSON definido");
  console.log("3. Obtener un JSON para crear usuarios en AppEvo");

  const option = await askQuestion('Elige una opción (1, 2, 3): ');

  if (option === '1') {
    const randomCURP = generateRandomCURP();
    console.log(`CURP generado: ${randomCURP}`);
  } else if (option === '2') {
    const curp = await askQuestion('Ingresa el CURP: ');
    try {
      console.log(createAccountJSON(curp));
    } catch (error) {
      console.error(error.message);
    }
  } else if (option === '3') {
    const randomCURP = generateRandomCURP();
    console.log(createAccountJSON(randomCURP));
  } else {
    console.log("Opción no válida");
  }

  rl.close();
}

main();