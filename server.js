const express = require("express");
const axios = require("axios");
let data = require("./mockDB");

data = data.map(person => {
  person = Object.assign({}, person, {
    firstName: person.first_name,
    lastName: person.last_name,
    imageUrl: person.image_url
  });
	delete person.first_name;
	delete person.last_name;
	delete person.image_url;
  return person;
});

const app = express();

app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => res.end());

app.get("/users", async (req, res) => {
  try {
    res.send(data);
  } catch (err) {
    res.status(500);
    res.end();
  }
});

app.listen(5000, () => console.log("Listening on port 5000"));
