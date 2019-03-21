console.log("hello world")
// return winner

const ranks = ["Royal Flush", "Straight Flush", "4 of a kind", "Full House", "Flush", "Straight", "3 of a kind", "2 pairs", "1 pair"]

// last round of poker game- given n hands
// iterate through arrays or hands, return rank for that hand or index inside ranks
// return hand that had lowest index


function returnWinner(hands){
  hands.forEach(hand => determineAHand(hand))
}
// [["3♥", "4♣"], ["3♥", "4♣"]]
// function that determines a hand- an array of 5 cards
// out put: "Royal Flush"
console.log(["3♥", "4♣", "K♣", "Q♦", "5♠"])

function determineAHand(hand){
  let suits = {}
  for (let i = 0; i < hand.length; i++){
    console.log(hand[i])
    if (suits[hand[i][1]]){
      suits[hand[i][1]]++
    } else {
      suits[hand[i][1]] = 1
    }
    return suits
  }

}



