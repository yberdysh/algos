/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n, primes = 0) {
    debugger;
    if (n === 0) return primes
    if (isPrime(n)) primes++
    return countPrimes(n - 1, primes)
};

function isPrime(n){
  if (n == 2) return true
  if (n == 3) return true
  if (n % 2 == 0) return false
  if (n % 3 == 0) return false

  let i = 5
  let w = 2

  while (i * i <= n){
    if (n % i == 0) return false

    i += w
    w = 6 - w
  }
  return true

}

countPrimes(499979)
