/**
Devuelve verdadero si sumando dos números del arreglo `nums`
nos da como resultado el número `x`.

@param {Number[]} nums
@param {Number} x
@returns {boolean}
*/
function puedeFormarse(nums, x) {
  const vistos = new Set();

  for (const num of nums) {
    const complemento = x - num;
    if (vistos.has(complemento)) {
      return true;
    }
    vistos.add(num);
  }

  return false;
}

const numeros = [1, 4, 3, 9];
const numeros2 = [1, 2, 4, 4];
const sumaRequerida = 8;

console.log("Solución con JavaScript utilizando un mapa de hash:");
console.log("[1, 4, 3, 9] es", puedeFormarse(numeros, sumaRequerida));
console.log("[1, 2, 4, 4] es", puedeFormarse(numeros2, sumaRequerida));

console.assert(
  puedeFormarse([1, 4, 3, 9], 8) === false,
  "llamar a puedeFormarse con [1, 4, 3, 9] buscando un 8 devuelve falso",
);
console.assert(
  puedeFormarse([1, 2, 4, 4], 8) === true,
  "llamar a puedeFormarse con [1, 4, 3, 9] buscando un 8 devuelve verdadero",
);
