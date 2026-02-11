const form = document.getElementById("capture-form");
const message = document.getElementById("form-message");
const email = document.getElementById("email");

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = email.value.trim();
  if (!validateEmail(value)) {
    message.textContent = "Digite um e-mail válido.";
    message.style.color = "#ef4444";
    return;
  }
  message.textContent = "Inscrição realizada. Em breve você receberá novidades.";
  message.style.color = "#a1a1aa";
  form.reset();
});
