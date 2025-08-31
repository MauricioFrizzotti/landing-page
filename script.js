document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("suscribeForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    message.textContent = `Gracias por suscribirte, ${email}`;
    message.style.color = "green";
    form.reset();
  });
});
