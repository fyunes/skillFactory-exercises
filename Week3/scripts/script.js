// const firstNum = parseInt(prompt("ingrese un número"));
// const secondNum = parseInt(prompt("ingrese otro número"));


// if (firstNum && secondNum === typeof (Number)) {
// } else if (firstNum > secondNum) {
//   console.log("El número mas grande es: " + firstNum);
// } else if (firstNum < secondNum) {
//   console.log("El número mas grande es: " + secondNum);
// } else {
//   console.log("dato NO válido");
// };

const firstNum = parseInt(prompt("ingrese un número"));
const secondNum = parseInt(prompt("ingrese otro número"));

if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
  console.log("Ingrese solo números");
}
else if (firstNum > secondNum) {
  console.log("El número mas grande es: " + firstNum);
}
else if (secondNum > firstNum) {
  console.log("El número mas grande es: " + secondNum);
}
else {
  console.log("Los números son iguales.");
};



const skillers = ["Rolo", "Javi", "Mel", "Ezequiel", "Max"];

const mayusSkillers = skillers.map(skillers => skillers.toUpperCase());
console.log(`Skillers en Mayuscula: ${mayusSkillers}`);

// const totalSkillers = skillers.length (Es un metodo no destructivo, no necesita una nueva variable)
console.log("Cantidad de Skillers:" + skillers.length);

console.log("Solo quedo " + skillers.slice(3, 4));

const skillersBackwards = skillers.reverse();
console.log(`Skillers al reves: ${skillersBackwards}`);

const newSkillers = skillers.push("Fer", "Marina", "Matias");
console.log(`Total skillers Now: ${newSkillers}`);
console.log(skillers);
