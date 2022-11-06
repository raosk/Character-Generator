function randomInteger(maxValue) {
  return Math.floor(Math.random() * maxValue);
}

function randomFirstName() {
  let names = [
    "Jack",
    "Julian",
    "Irvin",
    "Fred",
    "Henry",
    "Peter",
    "Leonard",
    "Michael",
    "Danny",
    "Peter",
    "Raymond",
    "Susie",
    "Lorraine",
    "Sherri",
    "Pearl",
    "Rosemary",
    "Catherine",
  ];
  let value = names[randomInteger(names.length)];
  return value;
}

function randomLastName() {
  let names = [
    "Miller",
    "Harmon",
    "Clay",
    "McClain",
    "Sullivan",
    "Sanders",
    "Boyd",
    "Horn",
    "Frazier",
    "Day",
    "Snider",
    "Galloway",
    "Lancaster",
    "Smith",
    "Roth",
  ];
  let value = names[randomInteger(names.length)];
  return value;
}

function randomProfession() {
  let professions = [
    "Baker",
    "Farmer",
    "Butcher",
    "Stonemason",
    "Blacksmith",
    "Merchant",
    "Apothecary",
    "Tax collector",
    "Tailor",
    "Tanner",
    "Carpenter",
    "Professor",
    "Clergyman",
    "Councillor",
    "Astrologer",
    "Shoemaker",
    "Guard",
    "Therapist",
    "Singer",
    "Artist",
    "Sculptor",
  ];
  let value = professions[randomInteger(professions.length)];
  return value;
}

function randomAge() {
  return String(randomInteger(54) + 16);
}

module.exports = {
  randomFirstName,
  randomLastName,
  randomProfession,
  randomAge,
};
