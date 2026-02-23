const footballTeam = {
    team: "Red Hawks FC",
    year: 2026,
    headCoach: "Alex Morgan",
    players: [
        { name: "David Silva", position: "forward", isCaptain: true },
        { name: "Marcus Lee", position: "midfielder", isCaptain: false },
        { name: "John Carter", position: "defender", isCaptain: false },
        { name: "Samir Khan", position: "goalkeeper", isCaptain: false },
        { name: "Luis Romero", position: "forward", isCaptain: false }
    ]
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

function renderPlayers(players) { const container = document.getElementById("player-cards"); container.innerHTML = players.map(player => ` <div class="player-card"> <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2> <p>Position: ${player.position}</p> </div> `).join(""); }

renderPlayers(footballTeam.players);

document.getElementById("players").addEventListener("change", (event) => { const position = event.target.value; if (position === "all") { renderPlayers(footballTeam.players); } else { const filtered = footballTeam.players.filter(p => p.position === position); renderPlayers(filtered); } });
