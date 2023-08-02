import calculator from "./calculator.js";
import prime from "./prime.js";
import factorial from "./factorial.js";
import palindrome from "./palindrome.js";
import table from "./table.js";
import vowel from "./vowel.js";
import grade from "./grade.js";
import interest from "./interest.js";
import bodyParser from "body-parser";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "MDC Partners test" });
  });

  app.use(
    bodyParser.json(),
    calculator,
    prime,
    factorial,
    palindrome,
    table,
    vowel,
    grade,
    interest
  );
};

export default routes;
