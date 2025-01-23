# GET Requests

## GET /json

retrieve the whole json file "birdsandpics.json"

Used when the page is loaded for the first time to give the initial data

|  Query |  key | description  | example|
|---|---|---|---|
|  /json | - | - | - |

### Response

Just gives the whole json file (this is it initially):

```


{
    "Birds":[
        {
            "birdName":"Robin",
            "bird_pictures":
                [
                        {
                            "pictureURL": "birdPictures/robin-7624340_640.jpg",
                            "alt_text_for_image":"Picture of a robin on a tree"
                        },
                        {
                            "pictureURL": "birdPictures/bird-5219205_640.jpg",
                            "alt_text_for_image":"Picture of a young robin on a tree"
                        }
                ]        
        },
        {
            "birdName":"Goldfinch",
            "bird_pictures":
            [
                        {
                            "pictureURL":"birdPictures/goldfinch-2766971_640.jpg",
                            "alt_text_for_image":"goldfinch on a railing"
                        },
                        {
                            "pictureURL":"birdPictures/goldfinch-7228334_640.jpg",
                            "alt_text_for_image":"goldfinch on a branch"
                        },
                        {
                            "pictureURL":"birdPictures/goldfinch-4232130_640.jpg",
                            "alt_text_for_image":"goldfinch on a snowy branch"
                        }

            ]
        }
    ]
}

```

## GET /bird?=id

retrieve json object of a specific bird object given an ID

Used instead of GET /json so that only necessary data is sent 

|  Query |  key | description  | example|
|---|---|---|---|
|  /bird?=id | id  | replace id with the name (id) of the bird that is being requested  | Robin|

### Response
This is the response using id = Robin but this will change depending on the input
But the json object will contain the same information but for the relevant bird

```
 {
            "birdName":"Robin",
            "bird_pictures":
                [
                        {
                            "pictureURL": "birdPictures/robin-7624340_640.jpg",
                            "alt_text_for_image":"Picture of a robin on a tree"
                        },
                        {
                            "pictureURL": "birdPictures/bird-5219205_640.jpg",
                            "alt_text_for_image":"Picture of a young robin on a tree"
                        }
                ]        
        }
```
# POST Requests

## POST /newPic

| Name  | Description  | Example  |
|---|---|---|
| birdName  |  The name(id) of the bird that the picture is of | Sparrow  |
| pictureURL  | The url of the picture being added  | https://cdn.pixabay.com/photo/2018/09/23/20/56/sparrow-3698507_1280.jpg  |
|  alt_text |  the alt text for the image, if there is any can be left blank | picture of a sparrow  |

This POST request adds a new birdPicture json entity

### Response
sends no response but does redirect back to the home page (http://127.0.0.1:8090/client/)

## POST /newBird

|  Name | Description  | Example  |
|---|---|---|
|  birdSpecies | The species(name) of the bird being added  | Sparrow |

This adds a new bird json entity to the json file, so that pictures for this bird species can be added

### Response
sends no response but does redirect back to the home page (http://127.0.0.1:8090/client/)
