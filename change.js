function numberOfWaysToMakeChange(n, denoms) {
  // debugger;
  let ways = new Array(n + 1).fill(0)
  console.log("ways", ways)
  ways[0] = 1
  for (let i = 0; i < denoms.length; i++){
    for (let amount = 1; amount <= n; amount++){
      if (denoms[i] <= amount){
        ways[amount] += ways[amount - denoms[i]]
      }
    }
  }
  console.log(ways)
//  arr that ahs indices from 0 up to our amount
  // Write your code here.
}

numberOfWaysToMakeChange(10, [1, 5, 10, 25])
