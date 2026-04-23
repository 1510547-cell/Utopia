function toggleSettings() {
  document.getElementById("settings").classList.toggle("open");
}

function setTab(title, iconPath) {
  document.title = title;
  const favicon = document.getElementById("favicon");
  if (favicon) favicon.href = iconPath;
}

function filterGames(category) {
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      category === "all" || card.dataset.category === category
        ? "block"
        : "none";
  });
}

function searchGames() {
  const query = document.getElementById("searchBar").value.toLowerCase();

  document.querySelectorAll(".card").forEach(card => {
    const title = card.querySelector("h3").innerText.toLowerCase();
    card.style.display = title.includes(query) ? "block" : "none";
  });
}
