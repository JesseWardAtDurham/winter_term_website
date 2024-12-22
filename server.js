const express = require('express')
const app = express()


let jsonData = require("./birdsandpics.json"); 
jsonData = JSON.parse(JSON.stringify(jsonData))

app.use("/client", express.static(__dirname + "/client"));
app.use(express.urlencoded({ extended: false }));


app.get('/', function(req, resp){
   a=jsonData["National_Parks"][0]["bird_pictures"][0]
   
   resp.send(jsonData["Bird_Pictures"][a])
   
})


app.get('/w', (req, res) => {
   res.send("hello" + req.query.person)
 })


app.post("/new", function(req, resp){
   console.log("got request")
   console.log(req.body.person)
   console.log(jsonData)
   resp.send("hello you")
})

app.get('/list', function (req, resp){
    resp.send(instruments);
})


app.listen(8090)