/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array */

// Push (inserción)
const array = ["red", "green"];
array.push("blue", "orange", "yellow", "white");
console.log('push', array);

// Pop (eliminación)
array.pop();
console.log('pop', array);

// Shift (elimina 1r elemento y lo retorna), 
console.log('shift', array.shift());
console.log(array);

// Unshift (agrega elemento al inicio del array)
array.unshift("black");
console.log('unshift', array);

// Reverse (orden inverso)
console.log('reverse', array.reverse());

// Sort (ordenación)
console.log('sort', array.sort());

// Slice 
// (devuelve una copia de una parte del array dentro 
// de un nuevo array empezando por inicio hasta fin (fin no incluido). 
// El array original no se modificará)
let tmp = array.slice(1,3);
console.log('slice', tmp);
tmp = array.slice(2);
console.log('slice', tmp);

// Splice
// cambia el contenido de un array eliminando elementos existentes 
// y/o agregando nuevos elementos.
array.splice(1, 2, 'gray', 'pink');
console.log('splice', array);