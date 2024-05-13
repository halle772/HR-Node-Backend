const mongoose = require("mongoose");
const dbURI = `mongodb+srv://${process.env.DB_HOST_USER}:${process.env.DB_HOST_PASS}@hrapp.rstg7aa.mongodb.net/?retryWrites=true&w=majority&appName=hrapp`;

mongoose.connect(dbURI, {
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to the database.");
}).catch((err) => console.log(err));


function closeDatabase() {
    mongoose.connection.close().then(() => {
        console.log("Closed the database connection.");
    }).catch((err) => console.log(err));
}

module.exports = { mongoose, closeDatabase };