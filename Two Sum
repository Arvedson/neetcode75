/*brute force method, O(n^2)*/ 

const nums = [1, 2, 6, 4, 5, 4, 7, 8, 15, 8, 9, 5, 4, 7, 3] 
const target = 10

function twoSum (){
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    } if (nums.length === 0){
        return ["No solution found"]
    } return ["no solution found"]
    
}
console.log(twoSum(nums, target))

/* hash map method O(n)*/

function twoSumhash (nums, target){

    const numToindex = new Map ()

    for (let i = 0; i < nums.length; i++){
        const numMenostarget = target - nums[i];
        if (numToindex.has(numMenostarget)){
            return [numToindex.get(numMenostarget), i]
        } numToindex.set(nums[i], i)
    }
    return ["solution not found"]
}
console.log(twoSumhash(nums, target))

/* two pointer solution: este metodo tiene O(n log n) */ 



function twoPointer (nums, target){

    let derecha = nums.length-1
    let izq = 0     

    while(izq <= derecha){
        let sum = nums[izq] + nums[derecha];
        if (sum === target){
            return [izq, derecha];
        } else if (sum > target) {
            derecha--;
        } else {
            izq++;
        }
    } return ["Solution not found"]
};

console.log(twoPointer(nums, target))

