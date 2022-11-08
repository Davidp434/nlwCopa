function createGame(player1, hour, player2) {
  return `
   <li>
              <img src="./assets/icon-${player1}.svg" alt="bandeira ${player1}" />
              <strong>${hour}</strong>
              <img src="./assets/icon-${player2}.svg" alt="bandeira ${player2}" />
            </li>
  `
}
function createCard(date, day, games) {
  return `
   <div class="card">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
        </div>
       
  `
}
document.querySelector("#app").innerHTML = `
<header>
        <img src="./assets/logo.svg" alt="Logo NLW" />
      </header>
      <main id="cards">
       ${createCard(
         "24/11",
         "quinta",
         createGame("brazil", "16:00", "servia") +
           createGame("portugal", "13:00", "ghana") +
           createGame("suica", "7:00", "camaroon")
       )})}
       ${createCard(
         "28/11",
         "segunda",
         createGame("korea", "10:00", "ghana") +
           createGame("brazil", "13:00", "suica") +
           createGame("portugal", "16:00", "uruguai")
       )}
       ${createCard(
         "02/12",
         "sexta",
         createGame("ghana", "12:00", "uruguai") +
           createGame("korea", "12:00", "portugal") +
           createGame("camaroon", "16:00", "brazil")
       )}


      </main>
`
