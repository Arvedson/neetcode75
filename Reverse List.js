/*
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1] 

Input: head = []
Output: []
*/

/* 

const reverseList = function (array){
    const result = []
    if (array.length === 0) {
        console.log(result)
    } else{      
        for (let i = array.length-1; i >=0 ; i--){
         result.push(array[i])
        } 
    }
    console.log(result)
}
console.log(reverseList([1, 2, 3, 4, 5, 6]))
*/


/*------------------------------------------------------------------------------------------*/


/* class Node {
    constructor(valor){
        this.valor = valor;
        this.next = null;
    }
}
const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next  = b
b.next = c
c.next = d
*/

/*  forma iterativa para acceder a los nodos de un linked list

const printLinkedlist = (head) =>{
    let current = head
    while(current !== null ){
        console.log(current.valor);
        current = current.next
    }
}
*/

/*forma recursiva para acceder a los nodos de un linked list 

const printLinkedlist = (head) =>{

    if(head === null) return
    console.log(head.valor)
    printLinkedlist(head.next)

}
printLinkedlist(a)*/



/* En este ejemplo estamos metiendo los valores de la lista en un array usando el metodo iterativo 

const meterValoresEnArray = (head) => {

    const values = [];
    let currentPointer = head

    while (currentPointer !== null){

        values.push(currentPointer.valor)
        currentPointer = currentPointer.next
        
    }
    console.log(values)
}
meterValoresEnArray(a) 
*/


/* meter valores de un linked list en un array recursivamente

const valores = [];

const meterValoresRecursivo = (head) => {

    if (head === null) return   
    valores.push(head.valor)
    console.log(valores)
    meterValoresRecursivo(head.next)

}
meterValoresRecursivo(a)
*/


/*-------------------------------------------------------------------------------------------------*/



/*
class Node {
    constructor(valor){
        this.valor = valor;
        this.next = null;
    }
}
const a = new Node(1)
const b = new Node(2)
const c = new Node(3)
const d = new Node(4)

a.next = b
b.next = c
c.next = d
*/


/* suma de valores de un linked list iterativamente

const sumaNodos = (head) => {

    let suma = 0
    let current = head

    while (current !== null) {

        suma += current.valor 
        current = current.next
    }
    console.log(suma)

}
sumaNodos(a)
*/

/* Suma de valores de una lista linkeada usando el metodo de recursion 

const sumaRecursiva = (head) => {

    let suma = 0
    let current = head

    if(head === null) {
        return 0
    }
    suma = head.valor + sumaRecursiva(head.next)
    return suma
}
sumaRecursiva(a)
const resultado = sumaRecursiva(a);
console.log(resultado)
*/


/*---------------------------------------------------------------------------------------*/


/*
class Node {
    constructor(valor){
        this.valor = valor;
        this.next = null;
    }
}
const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next  = b
b.next = c
c.next = d

let target = "G"

/* encontrar un target en un linked list iterativamente

const encontrarLetra = (head, target) => {

    let current = head

    while (current !== null){

        if(current.valor === target){
            return true
        }
        current = current.next     
    }
    return false
}
encontrarLetra(a)
const resultado = encontrarLetra(a);
console.log(resultado)

*/


/* encontrar un target en un linkedlist recursivamente

const encontrarRecursivo = (head, target) => {

    if (head === null)
    return false;

    if (head.valor === target){
        return true 
    } else {
        return encontrarRecursivo(head.next, target)
    }
    
}    
encontrarRecursivo(a, target)
const resultado = encontrarRecursivo(a);
console.log(resultado)
*/

/*------------------------------------------------------------------------------------------------------*/

/*
class Node {
    constructor(valor){
        this.valor = valor;
        this.next = null;
    }
}
const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")
const e = new Node("E")

a.next  = b
b.next = c
c.next = d
d.next = e

const targetIndex = 4

/* encontrar el valor de un nodo respecto a su posicion con metodo iterativo

const encontrarPosition = (head, targetIndex) => {

    let current = head
    let index = 0

    while(current !== null){
        if (index === targetIndex){
            return current.valor
        } else {
            current = current.next
            index++
        }
    }
}
const resultado = encontrarPosition(a, targetIndex);
console.log(resultado)
*/


/* encontrar el valor de un nodo dependiendo de su posicion con metodo recursivo

let index = 0
const encontrarTargetindexRecursivo = (head, targetIndex) => {
    
    if(targetIndex === index)
    return head.valor

    if(head === null)
    return false

    index++
    return encontrarTargetindexRecursivo(head.next, targetIndex)

}
const resultado = encontrarTargetindexRecursivo(a, targetIndex);
console.log(resultado)
*/

class Node {
    constructor(valor){
        this.valor = valor;
        this.next = null;
    }
}
const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")
const e = new Node("E")

a.next  = b
b.next = c
c.next = d
d.next = e

const reverseList = (head) => {

    let nodoactual = head
    let anterior = null

    while(nodoactual !== null){
        /* conservamos la direccion del siguiente nodo */
        let conservarLink = nodoactual.next
        /* rompemos la cadena reverseando los punteros */
        nodoactual.next = anterior
        anterior = nodoactual
        nodoactual = conservarLink
    }
    return anterior

}