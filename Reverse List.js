/*
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1] 

Input: head = []
Output: []
*/

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
console.log(reverseList([1,2, 3, 4, 5, 6]))

