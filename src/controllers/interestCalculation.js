class InterestCalculation {
  static calculate = (req, res) => {
    try {
      const jsonData = req.body;

      const finalValue =
        jsonData.initialCapital *
        Math.pow(1 + jsonData.interestRate, jsonData.monthsOfInvestment);

      res.status(200).send(`The final value is ${finalValue}`);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
}

export default InterestCalculation;
