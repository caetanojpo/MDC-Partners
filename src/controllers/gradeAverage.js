class GradeAverage {
  static getGrades = (req, res) => {
    try {
      const jsonData = req.body;

      const avgGrade =
        jsonData.reduce((accr, crv) => accr + crv.grade, 0) / jsonData.length;

      res
        .status(200)
        .send(`The student's average grades was ${avgGrade.toFixed(2)}`);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  };
}

export default GradeAverage;
