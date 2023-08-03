class SimpleCalculator {
  static add = (req, res) => {
    const result = calculator(req, "+");
    res.status(200).send(`Result: ${result}`);
  };

  static subtract = (req, res) => {
    const result = calculator(req, "-");
    res.status(200).send(`Result: ${result}`);
  };

  static multiply = (req, res) => {
    const result = calculator(req, "*");
    res.status(200).send(`Result: ${result}`);
  };

  static divide = (req, res) => {
    const result = calculator(req, "/");
    res.status(200).send(`Result: ${result}`);
  };
}

function calculator(req, operator) {
  try {
    const jsonData = req.body;
    const firstNumber = parseFloat(jsonData.firstNumber);
    const secondNumber = parseFloat(jsonData.secondNumber);
    return eval(firstNumber + operator + secondNumber);
  } catch (error) {
    res.status(500).send("Internal server error");
  }
}

export default SimpleCalculator;
