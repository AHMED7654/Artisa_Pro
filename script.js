// Burger menu mobile
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("open");
});

// Formulaire de démo (simulation)
function handleDemoRequest(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const activity = document.getElementById("activity").value.trim();
  const email = document.getElementById("email").value.trim();
  const messageEl = document.getElementById("formMessage");

  if (!name || !activity || !email) {
    messageEl.textContent = "Merci de compléter tous les champs.";
    messageEl.className = "form-message error";
    return;
  }

  messageEl.textContent =
    "Votre demande de démonstration a été enregistrée (simulation).";
  messageEl.className = "form-message success";

  setTimeout(() => {
    messageEl.textContent = "";
  }, 3500);

  event.target.reset();
}

// Année dynamique dans le footer
document.getElementById("year").textContent = new Date().getFullYear();
