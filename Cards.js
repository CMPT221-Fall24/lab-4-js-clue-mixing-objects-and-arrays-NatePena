// Suspects Array Total:6
const suspectsArray = [
    "Romeo",
    "Juliet",
    "Lil Wayne",
    "Derek Jeter",
    "George Washington",
    "Walter White"
  ];
  
  // Weapons Total:8
  const weaponsArray = [
    "Flamethrower",
    "Pellet Gun",
    "Rusty Pipe",
    "Smith & Wesson",
    "Knife",
    "Wrench",
    "Poison",
    "Bat"
  ];
  
  // Rooms Array Total:10
  const roomsArray = [
    "Kitchen",
    "Master Bedroom",
    "Basement",
    "Dining Room",
    "Library",
    "Pantry",
    "Office",
    "Hallway",
    "Study",
    "Cellar"
  ];
  
  // random card generator
  function selectRandom(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  // random suspect, weapon, and room generator
  function pickMystery() {
    const suspect = selectRandom(suspectsArray);
    const weapon = selectRandom(weaponsArray);
    const room = selectRandom(roomsArray);
  
    // return the mystery as an object
    return {
      suspect: suspect,
      weapon: weapon,
      room: room
    };
  }
  
  // reveal the mystery as a string
  function revealMystery(mystery) {
    return `${mystery.suspect} killed Mr. Marist using the ${mystery.weapon} in the ${mystery.room}!`;
  }
  