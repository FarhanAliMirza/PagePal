const express = require("express");
const app = express();

app.use(express.json());

const mainRouter = require("./routes/index");
app.use("/api/v1", mainRouter);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});