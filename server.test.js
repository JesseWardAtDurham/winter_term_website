const getBird = require("./server")

test('adds 1 + 2 to equal 3', () => {
    expect(getBird("Robin")).toStrictEqual({
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
    });
  });