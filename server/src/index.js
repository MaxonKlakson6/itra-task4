const express = require("express");
require("dotenv").config();
const sequelize = require("./database/db");
const router = require("./routes/index");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("All right");
});

const startApplication = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
    app.listen(PORT, () => {
      console.log(`Server ran on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApplication();
