const { Sequelize } = require("sequelize");
const db = new Sequelize("bookstore", "root", "senha123",{
    host: "localhost",
    dialect: "mariadb"
});

db.authenticate().then(()=>{
    console.log("connection has been established successfully.");
}).catch(()=>{
    console.error("Unable to connect to the database")
});

module.exports = db;