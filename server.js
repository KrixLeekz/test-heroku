const mysql = require('mysql')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 8080

let connection

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "animals_db"
    })
}

connection.connect((err) => {
    if (err) throw err
    console.log("Connected")
})

app.get('/', (req, res) => {
    res.send("Connected!")
})

app.listen(PORT, () => {
    console.log("listening on PORT: " + PORT)
})