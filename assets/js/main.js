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