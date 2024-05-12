const bycrypt = require("bcryptjs");
const { db, _ } = require("../../../db/database");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret";
const User = require("./model");


const register = async (req, res) => {
  {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid input" });
    }
    bycrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      const newUser = new User({ email, password: hash });
      newUser.save().then(() => {
        res.status(201).json({ message: "User created successfully" });
      }).catch((err) => {
        res.status(500).json({ error: err });
      })
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Invalid input" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    const isMatch = await bycrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user._id },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expires in 1 hour
    );

    res.status(200).json({ access_token: token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login };