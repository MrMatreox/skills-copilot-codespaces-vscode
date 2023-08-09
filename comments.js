// Create web server    
// 1. Create web server
// 2. Get data from client
// 3. Send data to client
// 4. Save data to file
// 5. Read data from file
// 6. Delete data from file
// 7. Update data from file
// 8. Create a front end application (HTML, CSS, JS)
// 9. Deploy to Heroku

// 1. Create web server
const express = require("express");
const app = express();

// 2. Get data from client
// 3. Send data to client
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/comments", (req, res) => {
    res.send(comments);
});

// 4. Save data to file
// 5. Read data from file
// 6. Delete data from file
// 7. Update data from file
const fs = require("fs");
const comments = JSON.parse(fs.readFileSync("./data/comments.json", "utf-8"));

// 8. Create a front end application (HTML, CSS, JS)
app.use(express.static("public"));

// 9. Deploy to Heroku
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});