const express = require("express");
const app = express();
const router = express.Router();
const drivers = require("./routes/api/Drivers");
const port = process.env.PORT || 2000;

router.get("/", (req, res) => {
  res.send("Welcome to my API. Grazie Ragazzi!");
});

app.use("/api", router);
app.use("/api/drivers", drivers);

app.listen(port, () => {
  console.log(`Live on port ${port}`);
});
