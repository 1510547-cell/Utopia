/* Open a game */
function openGame(url) {
  window.location.href = url;
}

/* Tab title + icon switcher */
function setTab(title, iconPath) {
  document.title = title;
  document.getElementById("favicon").href = iconPath;
}

/* Settings panel toggle */
function toggleSettings() {
  document.getElementById("settings").classList.toggle("open");
}

/* Category filter */
function filterGames(category) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

/* Search bar logic */
function searchGames() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
}
``
