// var singleNumber = function(nums) {
//     let hash = {}
//     for (let i = 0; i < nums.length; i++){
//         if (!hash[nums[i]]){
//             hash[nums[i]] = 1
//         } else {
//             delete hash[nums[i]]
//         }
//     }
//     return Object.keys(hash)[0]

// };

var singleNumber = function(nums) {
    let uniques = Array.from(new Set(nums))
    let uniquesSum = 2*(uniques.reduce((a, b) => a + b))
    let originalSum = nums.reduce((a, b) => a + b)
    return uniquesSum - originalSum

};
