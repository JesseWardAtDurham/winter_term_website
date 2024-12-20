const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, resp){
   resp.send('Hello world')
})
app.get('/w', (req, res) => {
   res.send("hello" + req.query.person)
 })
app.post("/new", function(req, resp){
   console.log("got request")
   console.log(req.body.person)
   resp.send("hello you")
})


app.listen(8090)