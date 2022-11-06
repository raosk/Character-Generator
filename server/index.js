const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const {
  randomFirstName,
  randomLastName,
  randomProfession,
  randomAge,
} = require("./randomGenerators");

// RANDOM GENERATORS
function randomInteger(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

/* function randomFirstName() {
    let names = ["Jack", "Julian", "Irvin", "Fred", "Henry", "Peter", "Leonard", "Michael", "Danny", "Peter", "Raymond", "Susie", "Lorraine", "Sherri", "Pearl", "Rosemary", "Catherine"]
    let value = names[randomInteger(names.length)]
    return value
}

function randomLastName() {
    let names = ["Miller", "Harmon", "Clay", "McClain", "Sullivan", "Sanders", "Boyd", "Horn", "Frazier", "Day", "Snider", "Galloway", "Lancaster", "Smith", "Roth"]
    let value = names[randomInteger(names.length)]
    return value
}

function randomProfession() {
    let professions = ["Baker", "Farmer", "Butcher", "Stonemason", "Blacksmith", "Merchant", "Apothecary", "Tax collector", "Tailor", "Tanner", "Carpenter", "Professor", "Clergyman", "Councillor", "Astrologer", "Shoemaker", "Guard", "Therapist", "Singer", "Artist", "Sculptor"]
    let value = professions[randomInteger(professions.length)]
    return value
} */

/* function randomAge() {
    return String(randomInteger(54) + 16)
} */

// Root route
app.get("/", (req, res) => {
  res.status(200).setHeader("Content-type", "text/html").send(`
    <h1>There's nothing here</h1>
    <p>Try these links instead:</p>
    <ul>
        <li><a href="http://localhost:3001/character////">http://localhost:3001/character////</a></li>
        <li><a href="http://localhost:3001/character/John/Doe/47/Professor">http://localhost:3001/character/John/Doe/47/Professor</a></li>
        <li><a href="http://localhost:3001/character//Doe//Professor">http://localhost:3001/character//Doe//Professor</a></li>
    </ul>
    `);
});

// Character generation route
app.get("/character/+:fName?/+:lName?/+:age?/+:profession?", (req, res) => {
  let data = {
    character: {
      fName: req.params.fName || randomFirstName(),
      lName: req.params.lName || randomLastName(),
      age: req.params.age || randomAge(),
      profession: req.params.profession || randomProfession(),
    },
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
