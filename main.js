//Built-in Objects exercises.

//1.---------- String ----------*/
//Crear una función que reciba un string como parametro y que al ser llamada haga
//un console.log mostrando el length del string recibido.
//solucion
console.log(" Exercise no. 1 String")
var m="Hola ¿cómo estás?"
str = () =>{
console.log("La longitud del string que insertaste es"+" " + m.length+" "+"caracteres")
}
str(m)

//2.---------- Number ----------*/
//crear una función que reciba un number, que haga lo siguiente:
//Determinar si el numero recibido es un número entero.
//En caso de ser entero, hacer un console.log avisando que es un entero. 
//En caso de no ser entero, convertirlo a entero y mostar el nuevo valor usando console.log.
//Ex:
//myFunc(number);
//posibles casos:
//a) el número es un entero :3
//b) el número ahora es un entero con valor de (valor) ;)
console.log("Exercise no.2 Number")
numb=(n)=>{
     Number.isInteger(n) ? console.log("¡El número es entero!"+" "+n):console.log("El número convertido de string a entero"+" "+parseInt(n,10))
}
numb(8);
numb('8');
 
//3.---------- Boolean ----------*/

//Crear una función que reciba un boolean, que al ser llamada haga un console.log mostrando:
//El numero de caracteres que representan el valor del boolean recibido.
//Ex:
//var flag = true;
//myFunc(flag);
//expected result:  4 caracteres.
console.log("Exercise no. 3 Boolean")
bool=(k)=>{
     return k.toString().length  
}
console.log("La longitud de tu booleano"+" "+bool(false))

//4.---------- Object ----------*/
//func=(obj)=>   
//El numero de propiedades que contiene el objeto.
//El nombre de cada una de las propiedades del objeto.
//El valor de cada una las propiedades del objeto.
//Ex:
//myFunc(obj); 
/*------------------------------ Solución ------------------------------------------- */
/*----------------------------------------------------------------------------------- */

console.log("Exercise no. 4 Object")
//crear una función que reciba un object, que al ser llamada haga un console.log mostrando:
var objt= {
    prop1 :"Hola",
    prop2 :"Holi",
    prop3 :"Holo",
}
object=(x)=>{
   return "El objeto tiene"+ " " +Object.keys(x).length+ "Con las propiedades"+" "+Object.keys(x)+"Con el valor de"+ " "+Object.values(x);
}
console.log(object(objt))

//5.---------- Function ----------*/
//Crear una función que reciba una function, que al ser llamada haga un console log mostrando:
//El número de argumentos que espera la funcion.
//console.log(r());
//result: 3.
/*------------------------------ Solución ------------------------------------------- */
/*----------------------------------------------------------------------------------- */
console.log("Exercise no. 5 Function")
var recive = new Function('a','b','c','return a+b+c') ;
function r(recive){

    console.log(recive.length);
} 
r(recive);

//6.----------- Array ----------*/
/*
Crear una función que reciba un array de strings, un número (desiredLength) y un string (template), 
que al ser llamda haga lo siguiente:
*Checar el numero de propiedades que tiene el array.
*Si el numero de propiedades es menor a desiredLength por 1: 
    *Rellenar el espacio faltante dentro del array usando template.  
    *Hacer un console.log del arreglo con los cambios.
*En caso de que no se cumpla la condición, mencionar si el array es menor o mayor que desiredLength y por cuanto.
Ex:
var arr = ['Apple', 'Banana'];
myFunc(arr, 3, 'apple');
*/ 
/*------------------------------ Solución ------------------------------------------- */
//----------------------------------------------------------------------------------- */
console.log("Exercise no. 6 Array")
let fruits = ['apple', 'banana'];
function myFunc(array,desiredLength,template){
  let difference = desiredLength - array.length;
  if(difference === 1){
    array.push(template);
    console.log(array);
  }else if(difference > 1){
    console.log(" el arreglo es menor por " + difference)
  }else{
    console.log("el arreglo es mayor por  " + Math.abs(difference));
  }
}
myFunc(fruits,1,'apple');
myFunc(fruits,2,'apple');
myFunc(fruits,0,'apple');
myFunc(fruits,3,'apple');

//7.---------- Date ----------*/
/*
Crear una función que al ser llamada haga dos console.log, uno mostrando la fecha actual 
y otro que muestre cuantos milisegundos han pasado desde el 1/enero/1970 hasta ahora.
myFunc();
*/
/*------------------------------ Solución ------------------------------------------- */
/*----------------------------------------------------------------------------------- */
console.log("Exercise no. 7 Date")
f=()=>{
    console.log("La fecha actual"+" "+Date());
    console.log("los milisegundos que han pasado"+ " "+ Date.now())
}
f()


//8.---------- Math ----------*/

//Crear una función que reciba dos numeros (base y exponente). 
//la función al ser llamada usará el valor absoluto de base y lo elevara a la potencia 
//determinada por exponente, al final mostrar este resultado usando console.log.
//Ex:
//myFunc(-3, 2) 
//result = 9;
/*------------------------------ Solución ------------------------------------------- */
/*----------------------------------------------------------------------------------- */
console.log("Exercise no. 8 Math")
m =(base,exp)=>{
   return Math.pow(Math.abs(base),exp)
}
console.log(m(-3,2))
//9.---------- RegExp ----------*/
console.log("Exercise no. 9 RegExp")
var rg= new RegExp(/([A-Z])/);
flag=rg.test("Nombre");
var flag2="HolA";
var temp= flag2.replace(/([A-Z])/,"Holi")
console.log(flag);
console.log(temp);
//Dada el siguiente patrón (/([A-Z])/), crear una funcion que reciba dos strings (str, template).
//Determine si str cumple con el patrón.
// Si cumple, remplazar el las incidencias del patron con el valor de template.
//Mostar el resultado usando console.log.
//Si no, mostrar un mensaje de no coincidencia usando console.log
//Ex:
//myFunc(str, template)
/*------------------------------ Solución ------------------------------------------- */
/*----------------------------------------------------------------------------------- */
//10.---------- Error ----------*/
//Crear una funcion que reciba un numero.
//Si el número es menor o igual a 10, usar console.log para mostrar un mensaje de valor dentro de los paramatros.
//Si el número es mayor a 10 arrojar un error con el mensaje, el valor esta fuera de los parametros.
//myFunc(number)
/*------------------------------ Solución ------------------------------------------- */
/*----------------------------------------------------------------------------------- */
console.log("Error");
function myerror (numero){
if(numero<=10){
    console.log("Valor dentro de los parámetros");
} else {
throw new Error('El valor está fuera de los parámetros');
}
}
myerror(8)

/*---------- Extra (más no opcional) ----------*/

//Usar los objetos vistos en clase y aplicarlos para solucionar un escenario que pueda ocurrir 
//entre los proyectos finales que tienen asignados.
//Describir el caso:
//Mostrar la solucíon en código:
//Proyecto: Work track 
//Caso: Mandar error en caso de insertar una cadena de texto mayor a 100 palabras para dar de alta título de tarea
console.log("Error");
function myerror (numero){
if(numero<=100){
    console.log("¡¡Tarea agregada exitosamente!!"+"en el día y hora"+" "+ Date());
} else {
throw new Error("Hola ¿cómo estás?, favor acorta la tarea que deseas dar de alta");
}
}
myerror(50)

