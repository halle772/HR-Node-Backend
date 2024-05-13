const express = require("express");
const cors = require("cors");
const authMiddleware = require("../src/utils/middleware/authMiddleware");
const { closeDatabase } = require("../db/database");

const app = express();
app.use(express.json());
const allowedOrigins = ['https://your-production-domain.com', 'http://localhost:4200'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200  // Some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

app.use("/", require("../src/apps/users/url"));

app.use("/employees", authMiddleware, require("../src/apps/employees/url"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


process.on("exit", closeDatabase);
module.exports = app;
