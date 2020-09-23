var express = require('express');
var port = 3000;
var secretPass = 'LIES'
const fs = require('fs');
const app = express();

//publika sidan som skickar innehållet av textfilen
app.get("/" ,(req, res) => {
    fs.readFile('public.txt', (err, data) => {
        if (err) throw err;
        res.write(data)
        res.end();
    });
});

app.get("/secret", (req, res) => {
    let urlPass = req.query.key;

    if(urlPass == secretPass){

        fs.readFile('secret.html', (err, data) =>{
            if (err) throw err;
            res.write(data)
            res.end();
        });
    }
    else{
        res.write('Error, wrong password. Better luck next time!')
        res.end();
    }
});

app.listen(port, () => {
    console.log('Working as intended at port ' + port)
})
