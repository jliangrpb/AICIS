const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

const intakeRoutes = require("./routes/intake");

//Middleware
app.use(cors());
app.use(express.json());

//Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "AICIS API is running",
  });
});

//Intake routes
app.use("/api/intake", intakeRoutes);

app.listen(PORT, () => {
  console.log(`AICIS server running on port ${PORT}`);
});