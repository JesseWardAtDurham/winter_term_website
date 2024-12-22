const express = require('express')
const app = express()


let jsonData = require("./birdsandpics.json");
jsonData = JSON.parse(JSON.stringify(jsonData))

app.use("/client", express.static(__dirname + "/client"));
app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, resp) {
   a = jsonData["National_Parks"][0]["bird_pictures"][0]

   resp.send(jsonData["Bird_Pictures"][a])

})


app.get('/w', (req, res) => {
   res.send("hello" + req.query.person)
})


app.post("/new", function (req, resp) {
   console.log("got request")
   console.log(req.body.person)
   console.log(jsonData)
   resp.send("hello you")
})

app.post("/newPic",function(req, resp){
   birdName=req.body.birdName
   pictureURL=req.body.pictureURL
   altText=req.body.altText
   console.log("hello")
   i=0
   while(jsonData["Birds"][i]){
      if(jsonData["Birds"][i]["birdName"]===birdName){
         jsonData["Birds"][i]["bird_pictures"].push({pictureURL:pictureURL,alt_text_for_image:altText})
      }
      i+=1
   }
   console.log(jsonData["Birds"])
   resp.redirect("http://127.0.0.1:8090/client/")

})

app.get('/bird', function (req, resp) {
   toGo = getBird(req.query.bird)
   //console.log(toGo)
   resp.send(toGo);
})

function getBird(birdName) {
   currrentData = jsonData["Birds"][0]
   i = 0
   while (currrentData != undefined) {
      i += 1
      if (currrentData["birdName"] == birdName) {
         return currrentData
      }
      currrentData = currrentData = jsonData["Birds"][i]
   }
}

app.listen(8090)