/*
We are writing a tool to help users manage their calendars. Given an unordered list of times of day when someone is busy, write a function that tells us whether they're available during a specified period of time.

Each time is expressed as an integer using 24-hour notation, such as 1200 (12:00), 1530 (15:30), or 800 (8:00).

Sample input:

meetings = [
  [1230, 1300],
  [845, 900],
  [1300, 1500]
]

Expected output:

isAvailable(meetings,  830,  845)  => true
isAvailable(meetings, 1330, 1400)  => false
isAvailable(meetings,  830,  930)  => false
isAvailable(meetings,  855,  930)  => false
isAvailable(meetings, 1500, 1600)  => true
isAvailable(meetings,  845,  900)  => false

Expected output (snake_case):

is_available(meetings,  830,  845)  => true
is_available(meetings, 1330, 1400)  => false
is_available(meetings,  830,  930)  => false
is_available(meetings,  855,  930)  => false
is_available(meetings, 1500, 1600)  => true
is_available(meetings,  845,  900)  => false


*/

// 2nd and 3rd parameter represents when the time starts and ends (that we are checking is avialable)


/*0800 - 0815
0900 - 0905*/


//  if end time is between startMeeting and endMeeting, return false


// if startingTime is greater than ending time, no conflict
// if startingTime < endTime, and > startTIme -> conflict

// create a loop to go through all of the times in the meetings
// created inner loop to loop through times
// convert times into hours and minutes
// startHour = 12
// startMinutes = 30
// endHour = 13
// endMinutes = 00

// convert params 2 and 3 into hour versus minutes
// 830 -> 8, 30

// check if the hour is between startHour and endHour
// if not, move one- this time is available
// if it is between time, not avaible
// [7:00 10:00] - 8:00- not available - return false

// if not between the startHour and endHour - is available


// [8:01, 8:05]
// [9:00, 9:05]
// , 8:30, 9:15
// also check if endHour matches 2nd param
// if minutes of 2nd param are greater, can attend meeting
//


function convertTimes(startTime, endTime){
  let startMinutesString = startTime.toString().slice(-2)
  let endMinutesString = endTime.toString().slice(-2)
  let startMinutes = parseInt(startMinutesString)
  let endMinutes = parseInt(endMinutesString)
  let startHourDigits = startTime.toString().length - startMinutesString.length
  let endHourDigits = endTime.toString().length - endMinutesString.length
  console.log(endHourDigits)
  let startHour = parseInt(startTime.toString().slice(0, startHourDigits))
  let endHour = parseInt(endTime.toString().slice(0, endHourDigits))
  return {
    startMinutes: startMinutes,
    endMinutes: endMinutes,
    startHour: startHour,
    endHour: endHour
  }


}

function isAvailable(meetings, startTime, endTime){
  for (let i = 0; i < meetings.length; i++){
    let startMeeting = meetings[i][0]
    let endMeeting = meetings[i][1]
    if ((startTime < endMeeting && startTime >= startMeeting) || (endTime > startMeeting && endTime < endMeeting) || startTime <= startMeeting && endTime >= endMeeting){
      return false
    }
  }
  return true


}

const meetings = [
  [1230, 1300],
  [845, 900],
  [1300, 1500]
];
//console.log(meetingConflicts(meetings, 830, 930));
//console.log(meetingConflicts(meetings, 1600, 845));
console.log(isAvailable(meetings,  830,  845))  /*=> true  */
console.log(isAvailable(meetings, 1330, 1400))  /*=> false */
console.log(isAvailable(meetings,  830,  930))  /*=> false */
console.log(isAvailable(meetings,  855,  930))  /*=> false */
console.log(isAvailable(meetings, 1500, 1600))  /*=> true */
console.log(isAvailable(meetings,  845,  900))  /*=> false */

// 1700 1600
