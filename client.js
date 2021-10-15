const axios = require("axios");

const characters = require("./characters");

async function allCharaters() {
  const response = await axios.get(characters);

  console.log(response.data);
}
allCharaters();
// A: Make a function that takes NO params and makes and axios request to our server to get all characters and logs them.

// B: Make a function that takes 1 parameter (characterId) and makes and axios call to your GET - /characters/:id endpoint. We should log the character with that id that is returned from our route.

// Your functions in this section should looks something like this:
