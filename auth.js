// Einfacher, rein clientseitiger "Schutz". Das Passwort steht im Klartext
// im Quellcode und ist daher NICHT sicher - siehe README.md für Details
// und Alternativen (z.B. GitHub Pages + echte Auth via Netlify/Cloudflare).

const SITE_PASSWORD = "training2026"; // <- hier anpassen
const VALID_USER = { user: "trainer", pass: "coach123" }; // <- hier anpassen

function isGateOpen() {
  return sessionStorage.getItem("gateOpen") === "yes";
}
function isLoggedIn() {
  return sessionStorage.getItem("loggedIn") === "yes";
}
function requireGate() {
  if (!isGateOpen() && !location.pathname.endsWith("index.html") && location.pathname !== "/") {
    location.href = "index.html";
  }
}
function requireLogin() {
  if (!isLoggedIn() && !location.pathname.endsWith("login.html")) {
    location.href = "login.html";
  }
}
function logout() {
  sessionStorage.clear();
  location.href = "index.html";
}
