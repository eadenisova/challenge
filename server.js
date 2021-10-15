const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

app.listen(port);

const characters = require("./characters");

app.get("/characters", (request, response) => {
  response.send(characters);
});

app.get("/characters/:id", (request, response) => {
  const characterId = request.params.id;
  const oneId = characters.find(
    (character) => character.id === parseInt(characterId)
  );

  response.send(oneId);
});

//  Require express, declare a value for PORT and start your server using app.listen.
//  Require (import) your characters file.
//  A: Create a GET - /characters route that return the whole list of characters.

//  B: Create a GET - /characters/:id route that returns the character with matching id

//  Remember to test these routes from your browser!
