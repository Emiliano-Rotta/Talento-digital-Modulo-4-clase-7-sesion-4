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

// // Consigna 1: Crear un Set de números únicos 
// //Crea un Set que almacene números únicos. Agrega al menos 5 números usando el método add(), intenta agregar un número duplicado y luego imprime la cantidad de elementos usando la propiedad size. Muestra el contenido final del Set.

// let numerosUnicos = new Set()

// numerosUnicos.add(10)
// numerosUnicos.add(20)
// numerosUnicos.add(30)
// numerosUnicos.add(40)
// numerosUnicos.add(50)

// numerosUnicos.add(30)

// console.log("La cantidad de elemetos en el set es:", numerosUnicos.size)

// console.log(numerosUnicos)


// // Consigna 2: Verificar la existencia de un valor 
// //Crea un Set con los nombres de tus 3 frutas favoritas. Luego, usa el método has() para verificar si una fruta específica está en el Set. Si está, imprime un mensaje que confirme su existencia, y si no está, agrega la fruta al Set.

// let frutas = new Set(["melon", "frutilla", "pera"])

// let frutaAAgregar = "kiwi"

// if (frutas.has(frutaAAgregar)) {
//     console.log(frutaAAgregar + " está en las frutas favoritas")
// } else {
//     frutas.add(frutaAAgregar)
// }

// console.log(frutas)

// // Consigna 3: Eliminar elementos de un Set 
// // Crea un Set con los nombres de 5 lenguajes de programación. Luego elimina uno de los lenguajes utilizando el método delete(). Finalmente, imprime el contenido actualizado del Set y la cantidad de elementos restantes.
// let lenguajes = new Set(["JS", "CSS", "Python", "Ruby", "Java"])

// lenguajes.delete("CSS")

// console.log("set actualizado", lenguajes)
// console.log("Cantidad de elementos restantes", lenguajes.size)


// // Consigna 4: Vaciar un Set 
// //Crea un Set con al menos 4 nombres de ciudades. Luego, utiliza el método clear() para vaciar el Set. Imprime un mensaje confirmando que el Set está vacío.

// let ciudades = new Set(["Córdoba", "Santiago", "Montevideo", "Rio"])

// ciudades.clear();

// if (ciudades.size === 0) {
//     console.log("el set está vacio")
// }


// // Consigna 5: Combinación de operaciones en un Set
// //Crea un Set vacío. A continuación, usa un ciclo for para agregar los números del 1 al 10 al Set. Luego, elimina los números pares con otro ciclo for y verifica cuántos números impares quedan en el Set. Usa los métodos add(), delete(), size y has() para resolverlo.

// let numeros = new Set();

// for (let i = 1; i < 11; i++) {
//     numeros.add(i)
// }

// console.log(numeros)
// //11 % 2 === 0

// for (let i = 1; i < 11; i++) {
//     if (i % 2 === 0) {
//         numeros.delete(i)
//     }
// }
// console.log(numeros)
// console.log("Los numeros impares son: ", numeros.size)


// // opcion con un for of para eliminar (código de Rodolfo y Juan)
// let vacio = new Set()
 
// for (let i = 1; i < 11; i++) {
//     vacio.add(i)
// }
 
// console.log(vacio)
 
// for (const value of vacio) {  
//     if (value % 2 === 0) {
//         vacio.delete(value)
//     }
// }

//------------------------------------------------------------
//                    map
//------------------------------------------------------------


// Un Map es una colección de pares clave-valor, donde tanto las claves como los valores pueden ser de cualquier tipo. A diferencia de los objetos, que solo permiten cadenas como claves, los Maps permiten cualquier tipo de dato como clave, incluyendo objetos.

// Características de 
// Mantienen el orden de inserción de los elementos.
// Las claves pueden ser de cualquier tipo (primitivas u objetos).
// Proporcionan métodos para manipular pares clave-valor.


// Métodos Comunes:
// set(key, value): Agrega o actualiza un par clave-valor.
// get(key): Devuelve el valor asociado a la clave.
// delete(key): Elimina el par clave-valor asociado a la clave.
// has(key): Devuelve true si la clave existe en el Map, de lo contrario, false.
// clear(): Elimina todos los pares clave-valor del Map.
// size: Propiedad que devuelve el número de pares clave-valor en el Map.


// const mapa = new Map();
// console.log(mapa)
// mapa.set("nombre", "Juan")
// console.log(mapa)
// mapa.set("edad", 30)
// console.log(mapa)
// console.log(mapa.get("nombre"))
// console.log(mapa.size)

const edades = new Map()

edades.set("Luis", 30)
edades.set("Pedro", 20)
edades.set("Juan", 35)
edades.set("Carlos", 40)
console.log(edades.get("Juan")) //35
console.log(edades.has("Juan")) //true
edades.delete("Juan")  //lo borré
console.log(edades.get("Juan")) //undefined
console.log(edades.has("Juan")) //false

console.log(edades.size) //3 (juan está eliminado)
edades.clear() //borro todo
console.log(edades.size) //0


// Consigna 1: Crear un Map con información de empleados 
//Crea un Map donde las claves sean los nombres de empleados y los valores sean sus cargos (por ejemplo, "Gerente", "Desarrollador", "Diseñador"). Usa el método set() para agregar al menos 5 empleados y sus cargos. Luego, imprime el tamaño del Map utilizando la propiedad size y muestra el contenido del Map.

// Consigna 2: Modificar y obtener información en un Map 
//Crea un Map que contenga nombres de ciudades de España como claves y su población (en millones) como valores. Usa el método get() para obtener la población de una ciudad específica. Luego, actualiza la población de esa ciudad con el método set() e imprime el contenido actualizado del Map.

// Consigna 3: Verificar la existencia de una clave
// Crea un Map con los nombres de distintos idiomas como claves y el número de hablantes en millones como valores. Verifica si un idioma específico existe en el Map utilizando el método has(). Si no existe, agrega ese idioma con su número estimado de hablantes.

// Consigna 4: Eliminar un par clave-valor 
// Crea un Map que contenga nombres de marcas de autos como claves y su país de origen como valores. Luego, elimina una de las marcas utilizando el método delete() e imprime el contenido actualizado del Map y su tamaño.

// Consigna 5: Vaciar un Map 
// Crea un Map con los nombres de 4 continentes como claves y su número de países como valores. Usa el método clear() para vaciar el Map e imprime un mensaje confirmando que el Map está vacío.