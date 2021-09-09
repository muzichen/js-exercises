import './function'
import './new'
import './curry'
import './array'
import './throttle_debounce'
import './immutability'


// function pipe(...fns) {
//   return function(x) {
    
//   }
// }

// const times = (y) =>  (x) => x * y
// const plus = (y) => (x) => x + y
// const subtract = (y) =>  (x) => x - y
// const divide = (y) => (x) => x / y

// pipe([times(2), plus(3), times(4)]);

// pipe accepts two operations
// const normal_pipe = (op1, op2) => {
//   return (arg) => {
//     const result1 = op1(arg);
//     return op2(result1);
//   }
// }

// const p1 = (a) => a + 3;
// const p2 = (a) => a * 2;

// const pipes = normal_pipe(p1, p2);
// console.log(pipes(2))

// var maxProfit = function(prices) {
//   let currentMinPrice = Number.MAX_VALUE; // 当前买入股票的最小值
//   let profit = 0; // 当前获利
//   for (let i = 0; i < prices.length; i++) {
//     const currentPrice = prices[i];
//     if (currentPrice < currentMinPrice) {
//       currentMinPrice = currentPrice;
//     }
//     const currentProfit = currentPrice - currentMinPrice;
//     if (currentProfit > profit) {
//       profit = currentProfit;
//     }
//   }
//   return profit;
// };

// console.log(maxProfit([7,1,5,3,6,4]))

