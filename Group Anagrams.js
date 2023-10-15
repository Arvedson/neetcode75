const groupAnagrams = function (strings) {
    
    console.log(strings)

    const anagrama = {};
    const noAnagrama = [];

    for (let str of strings){
    
        const count = new Array(26).fill(0)
        const palabra = str.split().sort().join("")
        
        for (let letra of palabra) {
            
                const indice = letra.charCodeAt(0) - "a".charCodeAt(0);
                count[indice]++;
                console.log("hola")
        }
        const id = count.join("")

        Object.assign(anagrama, {palabra: id})
        console.dir(anagrama) 


    
    

            
            
            
    console.log(count)
    console.log(id)
    
    }
     

}
console.log(groupAnagrams(["holaaa", "como", "estas", "holaaa"]))