import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "users"
})

// If there is a auth problem
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Lamadev123';

app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    res.json("hello")
})

app.get("/audio_files", (req,res)=>{
    const q = "SELECT path FROM audio_files"
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/audio_files", (req,res)=>{
    const q = "INSERT INTO audio_files (`artist`, `path`, `name`) VALUES (?)"
    const values = [
        req.body.artist,
        req.body.path,
        req.body.name
    ]

    db.query(q, [values], (err,data)=>{
        if (err) return res.json(err)
        return res.json("Audio files has been created successfully.")
    })
})

app.delete("/audio_files/:id", (req, res) => {
    const audioId = req.params.id
    const q = "DELETE FROM audio_files WHERE id = ?"
    
    db.query(q, [audioId], (err,data) => {
        if (err) {
            console.log(err);
            return res.json(err)
        }
        return res.json("Audio file has been deleted successfully!")
    })
})

app.put("/audio_files/:id", (req, res) => {
    const audioId = req.params.id
    const q = "UPDATE audio_files SET `artist` = ?, `path` = ?, `name` = ? WHERE id = ?"

    const values = [
        req.body.artist,
        req.body.path,
        req.body.name
    ]
    
    db.query(q, [...values, audioId], (err,data) => {
        if (err) {
            console.log(err);
            return res.json(err)
        }
        return res.json("Audio file has been deleted successfully!")
    })
})

app.listen(8800, () => {
    console.log("Connected to backend")
})