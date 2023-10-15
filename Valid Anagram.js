/*brute force method, to find if its an anagram we define two arrays from two previous strings, after that we iterate over each array in order to 
obtain its keys&values proceeding to store them into objects to define the key and value for each element. then using method entries we can define the object as an array to iterate between them
and copare if is equal or not. O(n)
  */

const s = "comida";
const isAnagramS= [];
for (let i=0; i < s.length; i++){
    const letra = s.charAt(i);
    isAnagramS.push(letra)
}
const t = "micoda"
const isAnagramT = [];
for (let i=0; i < t.length; i++){
    let letra = t.charAt(i);
    isAnagramT.push(letra)
}

const objetoAcumuladorS = {};
      
    for (let i = 0; i < isAnagramS.length; i++){
            const letra = isAnagramS[i];
            if (objetoAcumuladorS.hasOwnProperty(letra)){
                objetoAcumuladorS[letra]++;
            } else {
                objetoAcumuladorS[letra] = 1;
            }
        }

const objetoAcumuladorT = {};

    for (let i=0; i < isAnagramT.length; i++){
        const letra = isAnagramT[i];
        if (objetoAcumuladorT.hasOwnProperty(letra)){
            objetoAcumuladorT[letra]++;
        } else {
            objetoAcumuladorT[letra] = 1;
        }
    }

const claveValorS = Object.entries(objetoAcumuladorS).sort();
const claveValorT = Object.entries(objetoAcumuladorT).sort();

function esAnagrama(claveValorT, claveValorS){
    if (claveValorS.length !== claveValorT.length){
        return false;
    }
    for (let i = 0; i<claveValorS.length, i++;){
        if (claveValorS[i] !== claveValorT[i]) {
            return false;
        }
    } return true
}
console.log(esAnagrama(claveValorS, claveValorT))


/* easy solution O(n) same principles from the last example, exept the usage of native methods: */ 

const u = "texto";
const a = "texto";

const ordenadoU = u.split("").sort().join("")
const ordenadoA = a.split("").sort().join("")

function Anagram (ordenadoA, ordenadoU) {
    for (let i = 0; i < ordenadoU.length; i++){
    if (ordenadoU[i] !== ordenadoA[i]){
        return false;
    } else return true;
}
}
console.log(Anagram(ordenadoA, ordenadoU))























/*onst miArray = ['a', 'b', 'b', 'c', 'c', 'c', 'd', 'd', 'd', 'd'];
const acumulador = {}; // Un objeto para almacenar las letras y sus repeticiones

for (let i = 0; i < miArray.length; i++) {
    const letra = miArray[i];

    // Si la letra ya existe en el objeto, incrementa su contador
    if (acumulador[letra]) {
        acumulador[letra]++;
    } else {
        // Si no existe, inicializa su contador en 1
        acumulador[letra] = 1;
    }
}
console.log(acumulador);*/
