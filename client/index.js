
robinButton =  document.getElementById("Robin")

robinButton.addEventListener('click', function(event){
    fetch('http://127.0.0.1:8090/bird?bird=Robin')
     .then(response => response.text())
     .then(body =>
        displayIMG(body)
        
     )
  });

finchButton =  document.getElementById("Goldfinch")

finchButton.addEventListener('click', function(event){
    fetch('http://127.0.0.1:8090/bird?bird=Goldfinch')
     .then(response => response.text())
     .then(body =>
        displayIMG(body)
        
     )
  });

newPic=document.getElementById("newBirdPicture")

newPic.addEventListener("click",function(event){
    purgeImages()
    col=document.getElementsByClassName("col")
    newForm=document.createElement("form")
    newForm.action="http://127.0.0.1:8090/newPic"
    newForm.method="post"
    p1=document.createElement("p")
    p1.innerHTML="Bird Name"
    input1=document.createElement("input")
    input1.name="birdName"
    p1.append(input1)
    newForm.append(p1)
    p2=document.createElement("p")
    p2.innerHTML="Picture URL"
    input2=document.createElement("input")
    input2.name="pictureURL"
    p2.append(input2)
    newForm.append(p2)
    p3=document.createElement("p")
    p3.innerHTML="Alt text for your image"
    input3=document.createElement("input")
    input3.name="altText"
    p3.append(input3)
    newForm.append(p3)
    p4=document.createElement("p")
    input4=document.createElement("input")
    input4.type="submit"
    p4.append(input4)
    newForm.append(p4)
    col[0].append(newForm)

})


function purgeImages(){
    i=0
    col=document.getElementsByClassName("col")
    current=col[i].firstElementChild
    while(col[i]){
        current=col[i].firstElementChild
        while(current){
            temp=current.nextElementSibling
            current.remove()
            current=temp
        }
        i+=1

    }
}

function displayIMG(json){
    purgeImages()
    jsonData=JSON.parse(json);
    console.log(jsonData["bird_pictures"])
    i=0
    col=document.getElementsByClassName("col")
    while(jsonData["bird_pictures"][i]!=undefined){
        img1=document.createElement("img")
        img1.src=jsonData["bird_pictures"][i]["pictureURL"]
        img1.className="img-fluid"
        col[i%2].append("",img1)
        i+=1
    }
}
// a=document.createElement("div")
// dartmoorButton.after(a)

// col=document.getElementsByClassName("col")
// console.log(col[0].firstElementChild.nextElementSibling)
// k=col[0].firstElementChild.nextElementSibling
// h=document.createElement("img")
// h.src="birdPictures/goldfinch-7228334_640.jpg"
// col[0].append("",h)