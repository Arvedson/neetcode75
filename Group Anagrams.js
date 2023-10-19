const groupAnagrams = function (palabras) {
    const anagramas = new Map();
    const result = {}
  
    for (let str of palabras) {
      const count = new Array(26).fill(0);
      for (let letra of str) {
        const indice = letra.charCodeAt(0) - "a".charCodeAt(0);
        count[indice]++;
      }
      const id = count.join("");
  
      if (!anagramas.has(id)) {   /*aqui se revisa si ya existe en el objeto anagramas el id actual */ 
        anagramas.set(id, []); /*si no existe entonces se crea un nuevo elemento con su clave y un array para su valor*/
      }
      anagramas.get(id).push(str); /*si ya existe entonces se extrae el valor  */
    }
    return Array.from(anagramas.values());
  };
  

console.log(groupAnagrams(["holaaa", "como", "estas", "ahloaa", "carro", "rroca", "ohaaal"]))







