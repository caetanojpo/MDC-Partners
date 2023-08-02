class Factorial {
  static correspondantFactorial = (req, res) => {
    try {
      const receivedNumber = parseInt(req.params.sendNumber);

      let factorial = calcuteFactorial(receivedNumber);

      factorial != Infinity ? (factorial = BigInt(factorial)) : factorial;

      res.status(200).send(`Corresponding factorial: ${factorial}`);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
}

function calcuteFactorial(numberToCheck) {
  if (numberToCheck == 0) {
    return 1;
  }

  return numberToCheck * calcuteFactorial(numberToCheck - 1);
}

export default Factorial;
