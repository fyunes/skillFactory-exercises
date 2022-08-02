// const firstNum = parseInt(prompt('ingrese un número'));
// const secondNum = parseInt(prompt('ingrese otro número'));


// if (firstNum && secondNum === typeof (Number)) {
// } else if (firstNum > secondNum) {
//   console.log('El número mas grande es: ' + firstNum);
// } else if (firstNum < secondNum) {
//   console.log('El número mas grande es: ' + secondNum);
// } else if (firstNum == secondNum) {
//   console.log('Son iguales');
// } else {
//   console.log('dato NO válido');
// };

const firstNum = parseInt(prompt('ingrese un número'));
const secondNum = parseInt(prompt('ingrese otro número'));

if (Number.isNaN(firstNum) || Number.isNaN(secondNum)) {
  console.log('Ingrese solo números');
}
else if (firstNum > secondNum) {
  console.log(`%cEl número mas grande es: ${firstNum}`, 'color: #da55cd; font-size: 20px; font-weight: bold;');
}
else if (secondNum > firstNum) {
  console.log(`%cEl número mas grande es: ${secondNum}`, 'color: #da55cd; font-size: 20px; font-weight: bold;');
}
else {
  console.log(`%cLos números son iguales.`, 'color: #da55cd; font-size: 20px; font-weight: bold;');
};
console.log('');
console.log('%cA continuación comienza la práctica con algunos métodos de arrays', 'color: #5569da; font-size: 22px; ');
console.log('');
const skillers = ['Rolo', 'Javi', 'Mel', 'Ezequiel', 'Max'];

// const mayusSkillers = skillers.map(skillers => skillers.toUpperCase());
// console.log(`Skillers en Mayuscula: ${mayusSkillers}`);

console.log('%cEste es el metodo .length 📜', 'color: #f4d714; font-size: 15px;');
// const totalSkillers = skillers.length (Quité la variable)
console.log(`Cantidad de Skillers: ${skillers.length}`);

console.log('%cEste es el metodo .slice 📜', 'color: #f4d714; font-size: 15px;');
console.log(`Solo quedó ${skillers.slice(1, 6)}`);

console.log('%cEste es el metodo .reverse 📜', 'color: #f4d714; font-size: 15px' );
const skillersBackwards = skillers.reverse();
console.log(`Skillers al reves: ${skillersBackwards}`);

console.log('%cEste es el metodo .push 📜', 'color: #f4d714; font-size: 15px');
const newSkillers = skillers.push('Fer', 'Marina', 'Matias');
console.log(`Total skillers Now: ${newSkillers}`);
console.log(skillers);

console.log('%cEste es el metodo .pop 📜', 'color: #f4d714; font-size: 15px');
const removeLastSkiller = skillers.pop();
console.log(`Quedo nominado: ${removeLastSkiller} y se va de nuestro array`); // quitamos el ultimo elemento del array con pop.

console.log('%cEste es el metodo .shift 📜', 'color: #f4d714; font-size: 15px');
const removeFirstSkiller = skillers.shift();
console.log(`Con shift eliminamos a... ${removeFirstSkiller}`); // con shift eliminamos el primer elemento del array
console.log(`Así quedó el array por ahora.. ${skillers}`);

console.log('%cEste es el metodo .unshift 📜', 'color: #f4d714; font-size: 15px');
const addTwoSkillers = skillers.unshift('Matias', 'Leila');
console.log(`Se unen nuevos skillers al principio de la clase' ${skillers}`); // se agregan dos elementos al principio del array
console.log(`El total hasta ahora es de ${addTwoSkillers} `);

console.log('%cEste es el metodo .join 📜', 'color: #f4d714; font-size: 15px');
console.log(`Vamos a separar el array con asteriscos ${skillers.join('*')}`);

console.log('%cEste es el metodo .concat 📜', 'color: #f4d714; font-size: 15px');
const darkSideSkillers = ['Agustin', 'Sofia', 'Adrian', 'Guillermo', 'Alan'];
const lotOfskillers = skillers.concat(darkSideSkillers);
console.log(`Se agrando nuestra plantilla a:  ${lotOfskillers} `); //juntamos dos arrays y obtenemos uno nuevo

console.log('%cEste es el metodo .sort 📜', 'color: #f4d714; font-size: 15px');
console.log(`Estos son los skillers antes de usar el metodo sort:%c ${skillers}`, 'color: #55b0da');
console.log(`Veamos como queda luego de utilizarlo:%c ${skillers.sort()}`,  'color: #6bda55');

console.log('%cEste es el metodo .flat', 'color: #f4d714; font-size: 15px');
const skillersToFlat = ['Rolo', 'Javi', ['Mel', 'Ezequiel', ['Max']]]; // quita el array que le sigue menos profundo, por indice comenzando del 1.
console.log(skillersToFlat.flat(1));

// console.log('%cEste es el metodo .from 📜', 'color: #f4d714; font-size: 15px'); 
// console.log(Array.from([skillers], skillers => skillers + '. Volvemos a empezar, ' + skillers)); //esto no tiene ningun sentido, solo es práctica

console.log('%cEste es el metodo .some', 'color: #f4d714; font-size: 15px'); //Si algun componente del array es menor a 4 devuelve true, sino, false (esperado: true)
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const some = numeros.some(checkNum)
function checkNum(menor) {
  return menor < 4
}
console.log(some);
console.log('%cEste es el metodo .every 📜', 'color: #f4d714; font-size: 15px'); //si todos los componentes del array son menores a 4 devuelve true, sino false (esperado: false)
const every = numeros.every(checkNum)
function checkNum(menor) {
  return menor < 4
}
console.log(every);

console.log('%cEste es el metodo .isArray aplicado a skillers[] 📜' , 'color: #f4d714; font-size: 15px');
console.log(Array.isArray(skillers)); //true

console.log('%cEste es el metodo .at 📜', 'color: #f4d714; font-size: 15px');
console.log(`Hola ${skillers.at(-4)}`); // con at accedemos a elementos individuales de un array, utilizando indices negativos accedemos de derecha a izquierda.
console.log('%cEste es el metodo .splice 📜', 'color: #f4d714; font-size: 15px');
console.log(`Con splice podemos agregar nuevos elementos (se agregan Tomas y Emi): ${skillers.splice(2,0, 'Tomas', 'Emi')}`);
console.log(skillers)
console.log(`Ahora los quitamos: ${skillers.splice(2,2)}`);

console.log('%cEste es el metodo .valueOf 📜', 'color: #f4d714; font-size: 15px');
console.log(`Utilizamos valueOf que nos devuelve el array sin modificaciones para observar como quedo: ${skillers.valueOf()}`);

console.log('%cEste es el metodo .indexof 📜', 'color: #f4d714; font-size: 15px');
console.log(`Averiguemos el indice de Rolo usando indexOf(): ${skillers.indexOf('Rolo')}`);

console.log('%cEste es el metodo .forEach 📜', 'color: #f4d714; font-size: 15px');
console.log(`Con el forEach() podemos loggear cada elemento de un array así:`), skillers.forEach(element => console.log(element));

console.log('%c **Avalith**', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,156) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
