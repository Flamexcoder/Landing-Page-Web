document.getElementById("ctaBtn").addEventListener("click", () => {
  alert("Free trial coming soon!");
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMsg").textContent =
    "Thank you! We’ll get back to you shortly.";
});
