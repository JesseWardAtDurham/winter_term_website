const express = require('express')
const app = express()


let jsonData = require("./birdsandpics.json");
jsonData = JSON.parse(JSON.stringify(jsonData))

app.use("/client", express.static(__dirname + "/client"));
app.use(express.urlencoded({ extended: false }));

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

app.post("/newBird",function(req, resp){
   birdName=req.body.birdName

   jsonData["Birds"].push({birdName:birdName,bird_pictures:[]})

   console.log(jsonData["Birds"])
   resp.redirect("http://127.0.0.1:8090/client/")
})

app.get('/bird', function (req, resp) {
   toGo = getBird(req.query.bird)
   //console.log(toGo)
   resp.send(toGo);
})

function getBird(birdName) {
   currentData = jsonData["Birds"][0]
   i = 0
   while (currentData != undefined) {
      i += 1
      if (currentData["birdName"] == birdName) {
         return currentData
      }
      currentData = jsonData["Birds"][i]
   }
}


app.get("/json",function (req, resp){
   toGo = jsonData
   resp.send(toGo)
})

app.listen(8090)


 module.exports = getBird;