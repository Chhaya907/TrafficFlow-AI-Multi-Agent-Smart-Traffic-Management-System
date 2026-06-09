const express = require("express");
const cors = require("cors");
require("dotenv").config();

const getWeather =
require("./weatherTool");

const getRoute =
require("./routeTool");

const runAgent =
require("./agent");

const app = express();

app.use(cors());
app.use(express.json());

app.post(
  "/analyze",
  async (req, res) => {

    try {

      const {
        source,
        destination
      } = req.body;

      const weather =
      await getWeather(source);

      const route =
      await getRoute(
        source,
        destination
      );

      const analysis =
      await runAgent(
        source,
        destination,
        weather,
        route
      );

      res.json({
        success: true,
        weather,
        route,
        analysis
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        error: error.message
      });

    }
  }
);

app.listen(
  5000,
  () => {
    console.log(
      "Traffic Agent running on port 5000"
    );
  }
);