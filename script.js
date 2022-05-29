/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objectą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  marke: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};
// 1 variantas
function showObjectKeys (audi){
  return Object.keys(audi)
} 
console.log(Object.keys(audi))

// 2 variantas

/* let showObjectKeys = Object.keys(audi)
console.log(showObjectKeys) */





// 3 variantas

/* Object.keys(audi)
console.log(Object.keys(audi))  */


 /*console.log(audi)*/
// console.log(Object.keys(audi)); 
