// 1. Create the footballTeam object
const footballTeam = {
  team: "Argentina",
  year: 2024,
  headCoach: "Lionel Scaloni",
  players: [
    {
      name: "Lionel Messi",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Emiliano Martinez",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Cristian Romero",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Rodrigo De Paul",
      position: "midfielder",
      isCaptain: false
    }
  ]
};

// 2. Display headCoach, team and year
document.getElementById("head-coach").textContent = footballTeam.headCoach;
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;

// 3. Display players inside #player-cards
const playerCardsContainer = document.getElementById("player-cards");

footballTeam.players.forEach(player => {
  const playerCard = document.createElement("div");
  playerCard.classList.add("player-card");

  const playerName = document.createElement("h2");
  // Add (Captain) if isCaptain is true
  playerName.textContent = player.isCaptain ? `${player.name} (Captain)` : player.name;

  const playerPosition = document.createElement("p");
  playerPosition.textContent = `Position: ${player.position}`;

  playerCard.appendChild(playerName);
  playerCard.appendChild(playerPosition);
  
  playerCardsContainer.appendChild(playerCard);
});