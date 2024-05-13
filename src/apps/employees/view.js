const { db, _ } = require("../../../db/database");
const Employee = require("./model");


const getEmployees = (req, res) => {
  Employee.find({ user_id: req.user.userId }).then((employees) => {
    res.status(200).json(employees);
  }).catch((err) => {
    res.status(500).json({ error: err });
  });
};

const createEmployee = (req, res) => {
  const { name, salary, employer, deduction, position } = req.body;
  const user = req.user.userId;
  if (!name || !salary || !employer || !position) {
    return res.status(400).json({ error: "Invalid input" });
  }
  const newEmployee = new Employee({ name, salary, employer, deduction, position, user_id: user });
  newEmployee.save().then(() => {
    res.status(201).json({ message: "Employee created successfully" });
  }).catch((err) => {
    res.status(500).json({ error: err });
  });
};

const deleteEmployee = (req, res) => {
  const { id } = req.params;
  Employee.deleteOne({ _id: id, user_id: req.user.userId }).then(() => {
    res.status(200).json({ message: "Employee deleted successfully" });
  }).catch((err) => {
    res.status(500).json({ error: err });
  });
};

const updateEmployee = (req, res) => {
  const { id } = req.params;
  const { name, salary, employer, deduction, position } = req.body;
  if (!name || !salary || !employer || !position) {
    return res.status(400).json({ error: "Invalid input" });
  }
  Employee.findOneAndUpdate({ _id: id, user_id: req.user.userId }, { name, salary, employer, deduction, position }).then(() => {
    res.status(200).json({ message: "Employee updated successfully" });
  }).catch((err) => {
    res.status(500).json({ error: err });
  })
};

module.exports = { getEmployees, createEmployee, deleteEmployee, updateEmployee };