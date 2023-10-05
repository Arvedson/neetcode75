/* Brute force method O(n^2) */

const nums = [30,7,1,5,3,6,5,9,10,15,10,4,6,7,28,19];

function buySell (nums){

    const listaRestas = [];

    for(let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){

            if(nums[i] < nums[j]){
            const resta = nums[i] - nums[j];
            listaRestas.push(resta) }
            else {

            }
        } 
    } 
    const minimo = Math.abs(listaRestas.reduce((min, current) => Math.min(min, current), nums[0]))
    return minimo
}
const resultado = buySell(nums)
console.log(resultado) 
 


/* Two pointer method ascendiente, eficiencia de O(n) */
 
const prices = [30,7,1,5,3,6,5,9,40,15,10,4,6,7,14,19];

const twoPointerstock = (prices) => {

  let buy = 0;
  let sell = 1;
  let maxProfit = 0;

    while(sell < prices.length) {

      if(prices[buy] < prices[sell]) {

      let profit = prices[sell] - prices[buy];
      maxProfit = Math.max(maxProfit, profit)
      } else {
        buy = sell;
      }
      sell ++;
  }
  return maxProfit;
}
console.log(twoPointerstock(prices))

