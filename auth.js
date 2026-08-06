// Einfacher, rein clientseitiger Login-Schutz. Benutzername/Passwort stehen
// im Klartext im Quellcode und sind daher NICHT wirklich sicher - siehe
// README.md für Details und Alternativen (z.B. echte Auth via Backend).

// ===== SCHALTER: Login an/aus =====
// true  = Benutzername/Passwort werden verlangt
// false = kein Login, jede Seite ist frei zugänglich
const LOGIN_ENABLED = true;

const VALID_USER = { user: "test2026", pass: "test2026" }; // <- hier anpassen

function isLoggedIn() {
  return sessionStorage.getItem("loggedIn") === "yes";
}

// Der frühere Zugangscode-Schritt (index.html) wurde entfernt.
// requireGate() bleibt als leere Funktion bestehen, damit bestehende
// Seiten, die sie noch aufrufen, nicht brechen.
function requireGate() {}

function requireLogin() {
  if (!LOGIN_ENABLED) return;
  if (!isLoggedIn() && !location.pathname.endsWith("login.html")) {
    location.href = "login.html";
  }
}
function logout() {
  sessionStorage.clear();
  location.href = LOGIN_ENABLED ? "login.html" : "dashboard.html";
}
