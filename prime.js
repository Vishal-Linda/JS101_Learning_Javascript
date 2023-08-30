function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimesUpToLimit(limit) {
  for (let num = 2; num <= limit; num++) {
    if (isPrime(num)) {
      console.log(num);
    }
  }
}

const limit = 50;
printPrimesUpToLimit(limit);