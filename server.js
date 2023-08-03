import app from "./src/app.js";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const port = process.env.PORT || 3000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MDC Partners test API",
      version: "1.0.0",
      description: "API documentation comprising 8 dev test exercises",
    },
    tags: [
      {
        name: "Calculator",
        description: "Simple calculator operations with two numbers",
      },
      {
        name: "Prime Numbers",
        description: "Check if is a prime number",
      },
      {
        name: "Factorial",
        description: "Calculate the factorial of a number",
      },
      {
        name: "Palindrome",
        description: "Check if a word is a palindrome",
      },
      {
        name: "Table",
        description: "Returns the table of a number",
      },
      {
        name: "Vowel Counter",
        description: "Show the number of vowels of a word",
      },
      {
        name: "Grade Average",
        description: "Show the grade average of 3 subjects",
      },
      {
        name: "Interest Calculation",
        description: "Calculates the final value of an investment",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // Path to the API routes
};
const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(port, () => {
  console.log(
    `MDC Partners test currently running on: http://localhost:${port}`
  );
});
