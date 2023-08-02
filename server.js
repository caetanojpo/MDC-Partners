import app from "./src/app.js";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `MDC Partners test currently running on: http://localhost:${port}`
  );
});
