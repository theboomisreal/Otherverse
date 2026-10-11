// The Shelf — game registry
//
// Add a game by adding one object to this array. Each game lives in its own
// folder under /games/<slug>/ with its own index.html (and any css/js it needs).
//
// color options: "clay" | "moss" | "teal"  (cycles automatically if omitted)

const GAMES = [
  {
    title: "Unblocktorium",
    slug: "Unblocktorium",
    description: "play the best unblocked games with state of the art stealth fetures and no ads",
    color: "teal",
    image: "images/IMG_2611.jpeg",
    category: "GAMESBYME"
];

// FORCE SHELF TO LOAD ON INITIAL PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  if (typeof renderShelf === "function") {
    renderShelf("all");
  } else if (typeof displayGames === "function") {
    displayGames();
  }
});
