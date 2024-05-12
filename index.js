const express = require("express");
const cors = require("cors");
const authMiddleware = require("./src/utils/middleware/authMiddleware");
const { closeDatabase } = require("./db/database");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/", require("./src/apps/users/url"));

app.use("/employees", authMiddleware, require("./src/apps/employees/url"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


process.on("exit", closeDatabase);
