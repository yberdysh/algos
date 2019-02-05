function socks(arr){
  debugger;
  arr = arr.sort((a, b) => a - b)
  let pairs = 0;
  for (let i = 0; i < arr.length; i++){
    if (arr[i+1]){
      if (arr[i] === arr[i+1]){
        pairs++
        console.log("pre-slice", arr)
        arr = arr.slice(i + 2)
        console.log("post-slice", arr)
        i = -1;
      }
    }
  }
  return pairs
}

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])
socks([10, 20, 20, 10, 10, 30, 50, 10, 20, 20, 10, 20, 20, 10, 10, 30, 50, 10, 20])
socks([2,2,4,4,4,6,6,7,7])
