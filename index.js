var express = require('express');
var port = 3000;
var secretWord = 'lies'
const fs = require('fs');
const app = express();

//publika sidan som skickar innehållet av textfilen
app.get("/" ,(req, res) => {
    fs.readFile('public.txt', (err, data) => {
        if (err) throw err;
        res.write(data)
        res.end();
    })
});

app.get("/", (req, res) => {
    let guess
})

app.listen(port, () => {
    console.log('Working as intended')
})
