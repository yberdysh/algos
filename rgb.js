//example: ["G", "B", "R", "R", "B", "R"]

function rgb(arr){
  let rPointer;
  let bPointer;
  let hold;
  // find rPointer
  for (let i = 0; i < arr.length; i++){
    if (arr[i] !== "R"){
      rPointer = i
    }
  }
  //find bPointer
  for (let i = arr.length - 1; i >= 0; i--){
    if (arr[i] !== "B"){
      bPointer = i
    }
  }
  // start from rPointer + 1
  let end = bPointer
  gs = 0;
  for (let i = rPointer + 1; i <= bPointer; i++){
    if (arr[i] === "G"){
      gs++
      continue;
    }
    if (arr[i] === "R"){
      gotAnR()
      handleHold()
    } else if (arr[i] === "B"){
      gotAB()
      handleHolds()
    }
  }

  function gotAnR(){
      hold = arr[rPointer]
      arr[rPointer] = arr[i] //which is "R"
      rPointer++
  }

  function gotAB(){
      hold = arr[bPointer]
      arr[bPointer] = arr[i] //which is "B"
      bPointer--
      end--
  }


  function handleHolds(){
    if (hold === "B"){
      gotAB()
    } else if (hold === "R"){
      gotAnR()
    }
  }
}


