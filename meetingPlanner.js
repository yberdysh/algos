function meetingPlanner(slotsA, slotsB, dur){
  for (let i = 0; i < slotsA.length; i++){
    let personAStart = slotsA[i][0]
    let personAEnd = slotsA[i][1]
    for (let j = 0; j < slotsB.length; j++){
      let personBStart = slotsB[j][0]
      let personBEnd = slotsB[j][1]
      console.log(personBStart, personBEnd)
      if (personAStart >= personBStart && (personAStart + dur <= personAEnd) && (personAStart + dur <= personBEnd)){
          //return the later startTime + dur
          return [personAStart, personAStart + dur]
      } else if (personBStart >= personAStart && (personBStart + dur <= personBEnd) && (personBStart + dur <= personAEnd)){
        return [personBStart, personBStart + dur]
      }
    }
  }
  return []
}

//an O(n) solution:
function meetingPlanner(slotsA, slotsB, dur){
  let ia = 0;
  let ib = 0;
  while (ia < slotsA.length && ib < slotsB.length){
    if (slotsA[ia][0] >= slotsB[ib][0]){
      if (slotsA[ia][0] + dur <= slotsA[ia][1] && slotsA[ia][0] + dur <= slotsB[ib][1]){
        return [slotsA[ia][0], slotsA[ia][0] + dur]
      } else {
        if (slotsA[ia][1] < slotsB[ib][1]){
          ia++
        } else {
          ib++
        }
      }
    } else {
      if (slotsB[ib][0] + dur <= slotsB[ib][1] && slotsB[ib][0] + dur <= slotsA[ia][1]){
        return [slotsB[ib][0], slotsB[ib][0] + dur]
      } else {
        if (slotsB[ib][1] < slotsA[ia][1]){
          ib++
        } else {
          ia++
        }
      }
    }
  }
  return []
}
