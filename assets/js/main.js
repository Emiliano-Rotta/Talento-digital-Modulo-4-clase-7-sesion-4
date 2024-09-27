// // Sets
// // Un Set es una colección de valores únicos en JavaScript. Los Sets permiten almacenar cualquier tipo de datos, incluyendo objetos, y no permiten duplicados. Esto es útil cuando necesitas garantizar que un conjunto de elementos no contenga valores repetidos.

// // Características de Sets:
// // Los valores son únicos: no se permiten duplicados.
// // Los Sets son iterables, lo que significa que puedes usar bucles para recorrer sus elementos.
// // Puedes agregar, eliminar y verificar la existencia de elementos de manera eficiente.

// const frutas = ["banana", "manzana", "naranja", "manzana", "kiwi", "banana"]

// // console.log(frutas.length)

// const frutasSet = new Set(frutas) //"banana", "manzana", "naranja", "kiwi"
// // console.log(frutasSet.size)

// // add(value): Agrega un nuevo elemento al Set.
// // delete(value): Elimina un elemento del Set.
// // has(value): Devuelve true si el valor existe en el Set, de lo contrario, false.
// // clear(): Elimina todos los elementos del Set.
// // size: Propiedad que devuelve el número de elementos en el Set.

// frutasSet.add("uva") //se agrega la uva
// console.log(frutasSet.size)

// frutasSet.delete("manzana") //se borra la unica manzana que hay
// console.log(frutasSet.size)

// console.log(frutasSet.has("uva")) //true, hay uva
// console.log(frutasSet.has("manzana"))//false (borre la manzana arriba)

// frutasSet.clear()
// console.log(frutasSet.size) //0

//--------------------------------------------------------------------
//Ejercicios para hacer:
//--------------------------------------------------------------------

// Consigna 1: Crear un Set de números únicos 
//Crea un Set que almacene números únicos. Agrega al menos 5 números usando el método add(), intenta agregar un número duplicado y luego imprime la cantidad de elementos usando la propiedad size. Muestra el contenido final del Set.

// Consigna 2: Verificar la existencia de un valor 
//Crea un Set con los nombres de tus 3 frutas favoritas. Luego, usa el método has() para verificar si una fruta específica está en el Set. Si está, imprime un mensaje que confirme su existencia, y si no está, agrega la fruta al Set.

// Consigna 3: Eliminar elementos de un Set 
// Crea un Set con los nombres de 5 lenguajes de programación. Luego elimina uno de los lenguajes utilizando el método delete(). Finalmente, imprime el contenido actualizado del Set y la cantidad de elementos restantes.

// Consigna 4: Vaciar un Set 
//Crea un Set con al menos 4 nombres de ciudades. Luego, utiliza el método clear() para vaciar el Set. Imprime un mensaje confirmando que el Set está vacío.

// Consigna 5: Combinación de operaciones en un Set 
//Crea un Set vacío. A continuación, usa un ciclo for para agregar los números del 1 al 10 al Set. Luego, elimina los números pares con otro ciclo for y verifica cuántos números impares quedan en el Set. Usa los métodos add(), delete(), size y has() para resolverlo.