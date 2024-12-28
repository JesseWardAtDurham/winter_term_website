

purgeSideBar()

window.onload = getJson
function getJson(){
    fetch("http://127.0.0.1:8090/json").then(response => response.text()).then(body=>loadSideBar(body))
}

console.log("hello1")


newBird=document.getElementById("newBird")

newBird.addEventListener("click",function(event){
    purgeImages()
    col=document.getElementsByClassName("col")
    newForm=document.createElement("form")
    newForm.action="http://127.0.0.1:8090/newBird"
    newForm.method="post"
    p1=document.createElement("p")
    p1.innerHTML="Bird Species Name"
    input1=document.createElement("input")
    input1.name="birdName"
    p1.append(input1)
    newForm.append(p1)
    col[0].append(newForm)
})

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

function purgeSideBar(){
    birdSpeciesArray=[]
    navBar = document.getElementsByClassName("nav flex-column")
    currentButton=navBar[0].firstElementChild
    currentButton = currentButton.nextElementSibling
    while (currentButton.id!="newBirdPicture"){
        next=currentButton.nextElementSibling
        currentButton.remove()
        currentButton=next
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
function loadSideBar(json){
    navBar = document.getElementsByClassName("nav flex-column")
    firstText=navBar[0].firstElementChild.nextElementSibling
    i=0
    jsonData=JSON.parse(json)
    //console.log(jsonData)
    while (jsonData["Birds"][i]!=undefined){
        id=jsonData["Birds"][i]["birdName"]
        buttonToAdd=createButtonToAdd(id,id)
        i+=1
        firstText.before(buttonToAdd)
        addListener(id)
    }
}

function createButtonToAdd(id,text){
    button = document.createElement("button")
    button.className="btn btn-light"
    button.id=id
    button.innerHTML=text
    return button
}

function addListener(id){
    currentButton = document.getElementById(id)
    currentButton.addEventListener("click", function(event){
        fetch('http://127.0.0.1:8090/bird?bird='+id)
        .then(response => response.text(),function(){window.alert("connection failure")})
        .then(body =>
            displayIMG(body)
        )
    })
}
//fnm env --use-on-cd | Out-String | Invoke-Expression

// a=document.createElement("div")
// dartmoorButton.after(a)

// col=document.getElementsByClassName("col")
// console.log(col[0].firstElementChild.nextElementSibling)
// k=col[0].firstElementChild.nextElementSibling
// h=document.createElement("img")
// h.src="birdPictures/goldfinch-7228334_640.jpg"
// col[0].append("",h)