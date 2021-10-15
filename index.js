const characters = require("./characters");

function getCharacterById(list, id) {
  return list.find(function (character) {
    if (id === character.id) {
      return true;
    } else {
      return false;
    }
  });
}
const quote = "I killed Sirius Black... I killed Sirius Black... 🎶";
function getCharacterByQuote(list) {
  return list.filter(function (character) {
    if (quote === character.quote) {
      return true;
    } else {
      return false;
    }
  });
}

const correctPatronus = "Non-corporeal";

function getCharacterByPatronus(list, correctPatronus) {
  return list.filter(function (character) {
    if (correctPatronus === character.patronus) {
      return true;
    } else {
      return false;
    }
  });
}

console.log(getCharacterByPatronus(characters, correctPatronus));

console.log(getCharacterByQuote(characters));

console.log(getCharacterById(characters, 1));
