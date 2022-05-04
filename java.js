let searchText = document.getElementById("txtSearch");

searchText.onkeydown = async function (event) {
  console.log(event.key);
  if (event.key === "Enter") {
    event.preventDefault();

    // TODO: skriv kod som hämtar värdet i sökfältet (searchText) och lägger det i
    // variabeln searchTerm
    let searchTerm = searchText.value;

    // Det här anropas funktionen för att hämta info från ett API.
    // Vi väntar på svaret med await
    let results = await search(searchTerm);

    // Här anropas funktionen som ansvarar för att "rendera" (alltså rita ut) resultatet
    renderResults(results);

    // Skriv kod för att tömma sökfältet igen
  }
};

// Detta är en asynkron funktion som anropar ett API och returnerar svaret som ett JSON-objekt.
async function search(searchString) {
  let apiKey = "1a08c634ec1bc9d64558c15c3e88cdbf"; //API-nyckeln.
  var url = `https://api.themoviedb.org/3/search/movie?query=${searchString}&api_key=${apiKey}`;
  console.log("Den URL vi kommer anropa: ", url);

 
  let response = await fetch(url);

  let json = await response.json();
  return json;
}

function renderResults(res) {
  let resultDiv = document.getElementById("searchresults"); //Hämtar ut diven med id="searchresults" för att lägga in resultatet där
  //Använd console.log för att se ur objektet res ser ut.
  console.log("resultatet",res);

  // TODO: Hämta ut attributet av variablen res som innehåller listan med resultat
  // och tilldela variablen allObjects det värdet.
  let allObjects = res.results;
  allObjects.forEach(function (object)  {
    // TODO: lägg in en div i resultDiv för varje objekt
    // du kan använda t.ex. resultDiv.insertAdjacentHTML("beforeend", "en sträng med html")

    let html = `<img src="https://image.tmdb.org/t/p/w154${object.poster_path}">`
    resultDiv.insertAdjacentHTML("beforeend", html)

  });
}
