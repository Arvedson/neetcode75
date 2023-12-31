/* este metodo tiene una eficiencia de O(n) ya simplificada. el metodo replace es O(n)
el bucle while O(n/2) (two pointers) en el peor caso. la memoria lineal O(n) ya que no se usa ninguna estructura de datos que 
incremente su tamano de forma exponencial*/ 

const s = "hola como estas"

function isPalindrome (s){

    const alphanumerical = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = alphanumerical.length - 1;

    while (left <= right){
        if (alphanumerical[left] !== alphanumerical[right]){
            return ["Is not palindrome"];
        } else{
            left++;
            right--;
        }
    } 
    return ["Is palindrome"]
}
console.log(isPalindrome(s))

