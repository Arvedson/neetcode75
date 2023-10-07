
    


function parentesis (string){

    let stack = [];
    
    if(string.length ===0){
        return false
    }


    for (let i = 0; i < string.length; i++){
        if (string[i] === "}" || string[i] === "]" || string[i] === ")"){
            return false
        }
        



        if (string[i] === "{" || string[i] === "[" || string[i] === "("){
            let current = string[i];
            stack.push(current)
        }

    } 
}



console.log(parentesis("({{}}"))
    