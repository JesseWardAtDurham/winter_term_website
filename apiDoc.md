## getBirdGivenId

 retrieve json object of a specific bird object given an ID

### GET /bird?=id

|  Query |  key | description  | example|
|---|---|---|---|
|  /bird?=id | id  | replace id with the name (id) of the bird that is being requested  | Robin|

### Response

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