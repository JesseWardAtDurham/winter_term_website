const getBird = require("./server")

test('checks get bird works for robin', () => {
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

test('checks get bird works for goldfinch', () => {
    expect(getBird("Goldfinch")).toStrictEqual({
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
    });
  });