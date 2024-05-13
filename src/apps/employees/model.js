const { mongoose } = require("../../../db/database");

const employeesSchema = new mongoose.Schema({
    name: String,
    employer: String,
    position: String,
    salary: Number,
    deduction: [{
        name: String, // Default 'name' if not provided
        value: Number        // Default 'value' if not provided
    }],
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Employee = mongoose.model("Employee", employeesSchema);

module.exports = Employee;
