/* este metodo tiene eficiencia en memoria/tiempo lineal O(n) 
una iteracion, "dos campos de memoria"  */

function parentesis (string){

    let stack = [];

    const pares = {

        "[" : "]",
        "{" : "}",
        "(" : ")",

    }

    if(string.length === 0){
        return false
    }

    if (string[0] === "}" || string[0] === "]" || string[0] === ")"){
        return false
    }

    for (let i = 0; i < string.length; i++){

        if (string[i] === "{" || string[i] === "[" || string[i] === "("){
            let current = string[i];
            stack.push(current)

        } else {

            const ultimoElemento = stack.pop()         /* accedemos al ultimo elemento del stack y simultaneamente lo eliminamos con .pop() */ 
            if (string[i] !== pares[ultimoElemento]){   /* tomamos el ultimo elemento del stack como clave del objeto pares pares[ultimoElemento] "{([" y si es difernte al valor de i en especie "],},)" se rompe   */
                return false
            } 
        }
    } 
    return stack.length === 0
}



console.log(parentesis("({[]}())"))
    