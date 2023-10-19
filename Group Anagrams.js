const groupAnagrams = function (palabras) {
    
    const anagramas = new Map();
    const result = [];
    

    for (let str of palabras){
        
        const count = new Array(26).fill(0)
        const palabra = str
        for (let letra of palabra) {
                const indice = letra.charCodeAt(0) - "a".charCodeAt(0);
                count[indice]++;       
        }
        const id = count.join("")
        anagramas.set(id, palabra)
    }

    for (const [clave, valor] of anagramas.entries()){

        let vision = anagramas.entries()
        const sonAnagramas = [...anagramas.keys()]
        
    }
}

console.log(groupAnagrams(["holaaa", "como", "estas", "ahloaa", "carro", "rroca", "ohaaal"]))







