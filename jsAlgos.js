function areFollowingPatterns(strings, patterns) {
//     cat dog dog
//     a b b
    let patternsHash = {}
    for (let i = 0; i < patterns.length; i++){
        if (!patternsHash[patterns[i]] && !Object.values(patternsHash).includes(strings[i])){
            patternsHash[patterns[i]] = strings[i]
        } else {
            if (patternsHash[patterns[i]] !== strings[i]){
                return false
            }
        }
    }
    return true;
}

console.log(areFollowingPatterns(["cat", "dog", "dog"], ["a", "b", "b"]))

console.log(areFollowingPatterns(["cat", "dog", "doggy"], ["a", "b", "b"]))
