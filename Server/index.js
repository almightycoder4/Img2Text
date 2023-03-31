const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const app = express();
const cardRouter = require("./routes/cardsRoute");
const fs = require("fs");

const directoryName = "images";

fs.mkdir(directoryName, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Directory '${directoryName}' created successfully.`);
  }
});

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.use("/", cardRouter);
app.get("/test", (req, res) => {
  res.send("Ready to work..");
});
const port = process.argv[2] || 3035;

app.listen(port, () => {
  console.log(`Server has started on http://localhost:${port}`);
});
