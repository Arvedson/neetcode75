/* Brute force method involves comparing each element in the array with every other element in the array, 
The time complexity of this approach is O(n^2), where n is the length of the array.
so, this approach is not efficient for large arrays*/

const nums = [1, 2, 3, 4, 5, 6, 7, 7]

function containsDuplicateBrute (nums) {
    const n = nums.length
    for (let i = 0; i < n - 1; i ++) {
        for(let j = i + 1; j < n; j++){
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false
}

console.log(containsDuplicateBrute(nums))

/* another aproach by sorting the array to check the adjacent elements, if any is equal return true
The time complexity of this approach is O(n log n), where n is the length of the array. */

function containsDuplicateSorting (nums){
    nums.sort((a,b) => a - b);
    const n = nums.length;
    for (let i = 1; i < n; i++) {
        if (nums[i] === nums[i-1]) {
            return true;
        }
    } return false;
}
console.log(containsDuplicateSorting(nums))

/*   
The hash set approach uses a hash set data structure to store encountered elements. It iterates through the array, 
checking if an element is already in the set. If so, it returns true. Otherwise, it adds the element to the set. 
This approach has a time complexity of O(n) and provides an efficient way to check for duplicates.
 */ 

function duplicadosSet (nums) {
    const s = new Set(nums);
    return s.size !== nums.length;
}
console.log(duplicadosSet(nums))



