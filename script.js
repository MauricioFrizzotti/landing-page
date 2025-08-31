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

  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = { threshold: 0.3 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
      observer.unobserve(entry.target);
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  });
});
