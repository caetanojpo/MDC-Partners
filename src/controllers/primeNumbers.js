class PrimeNumbers {
  static printPrimes(req, res) {
    try {
      const primes = [];
      let receivedNumber = parseInt(req.params.sendNumber);
      const isPrime = checkIfIsPrime(receivedNumber);

      if (isPrime) {
        while (primes.length < 10) {
          if (checkIfIsPrime(receivedNumber)) {
            primes.push(receivedNumber);
          }
          receivedNumber++;
        }

        res
          .status(200)
          .send(
            `The number ${req.params.sendNumber} is a prime - The next 10 prime numbers are: ${primes}`
          );
      } else {
        res.send(`The number ${receivedNumber} is not a prime`);
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  }
}

function checkIfIsPrime(currentNumber) {
  let isPrime = true;

  if (currentNumber <= 1) {
    isPrime = false;
  } else if (currentNumber <= 3) {
    isPrime = true;
  } else if (currentNumber % 2 == 0 || currentNumber % 3 == 0) {
    isPrime = false;
  }

  for (let i = 5; i * i <= currentNumber; i = i + 6) {
    if (currentNumber % i == 0 || currentNumber % (i + 2) == 0) isPrime = false;
  }

  return isPrime;
}

export default PrimeNumbers;
