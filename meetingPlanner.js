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
