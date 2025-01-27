
const app = require('./app')
const request = require("supertest");

describe("Test for /json", () => {
    test("Should retrieve whole json file", done => {
      request(app)
        .get("/json")
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.body).toStrictEqual({"Birds": [{"birdName": "Robin","birdInfo":"", "bird_pictures": [{"alt_text_for_image": "Picture of a robin on a tree", "pictureURL": "birdPictures/robin-7624340_640.jpg"}, {"alt_text_for_image": "Picture of a young robin on a tree", "pictureURL": "birdPictures/bird-5219205_640.jpg"}]}, {"birdName": "Goldfinch","birdInfo":"", "bird_pictures": [{"alt_text_for_image": "goldfinch on a railing", "pictureURL": "birdPictures/goldfinch-2766971_640.jpg"}, {"alt_text_for_image": "goldfinch on a branch", "pictureURL": "birdPictures/goldfinch-7228334_640.jpg"}, {"alt_text_for_image": "goldfinch on a snowy branch", "pictureURL": "birdPictures/goldfinch-4232130_640.jpg"}]}]});
          done();
        });
    });
  });

describe("Test for /bird", () => {
    test("Should retrieve bird entity for given ID", done => {
      request(app)
        .get("/bird?bird=Robin")
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.body).toStrictEqual({"birdName": "Robin","birdInfo":"", "bird_pictures": [{"alt_text_for_image": "Picture of a robin on a tree", "pictureURL": "birdPictures/robin-7624340_640.jpg"}, {"alt_text_for_image": "Picture of a young robin on a tree", "pictureURL": "birdPictures/bird-5219205_640.jpg"}]});
          done();
        }),
    request(app)
        .get("/bird?bird=Goldfinch")
        .then(response => {
          expect(response.status).toBe(200);
          expect(response.body).toStrictEqual({"birdName": "Goldfinch","birdInfo":"", "bird_pictures": [{"alt_text_for_image": "goldfinch on a railing", "pictureURL": "birdPictures/goldfinch-2766971_640.jpg"}, {"alt_text_for_image": "goldfinch on a branch", "pictureURL": "birdPictures/goldfinch-7228334_640.jpg"}, {"alt_text_for_image": "goldfinch on a snowy branch", "pictureURL": "birdPictures/goldfinch-4232130_640.jpg"}]});
          done();
        });        
    });
  });

describe("Test for /newPic", () => {
    test("Should send the data and redirect the user to the home page sending status code 303", done => {
      request(app)
        .post("/newPic")
        .send({birdName: "Robin",
               pictureURL: "https://cdn.pixabay.com/photo/2021/09/12/18/07/robin-6619184_1280.jpg",
               altText: ""
        })
        .then(response=>{
            expect(response.status).toBe(303);
            done();
        });
    });
  });

describe("Test for /newBird", () => {
    test("Should send the data and redirect the user to the home page sending status code 303", done => {
      request(app)
        .post("/newPic")
        .send({birdName: "Robin"})
        .then(response=>{
            expect(response.status).toBe(303);
            done();
        });
    });
  });