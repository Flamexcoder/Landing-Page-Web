// Smooth scroll for internal navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Animate stats on scroll
const stats = document.querySelectorAll(".stats-grid strong");
let statsAnimated = false;

function animateStats() {
  if (statsAnimated) return;

  const section = document.querySelector(".stats");
  const sectionTop = section.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100) {
    stats.forEach(stat => {
      const target = stat.innerText;
      let count = 0;
      const isPercent = target.includes("%");
      const isTime = target.includes("min");

      const end = parseInt(target);
      const interval = setInterval(() => {
        count++;
        stat.innerText = isPercent
          ? `${count}%`
          : isTime
          ? `${count} min`
          : count;

        if (count >= end) clearInterval(interval);
      }, 30);
    });
    statsAnimated = true;
  }
}

window.addEventListener("scroll", animateStats);

// CTA hover micro-interaction
document.querySelectorAll(".btn-primary").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.05)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// Fake chart animation (dashboard feel)
const chart = document.querySelector(".chart");

let grow = true;
setInterval(() => {
  if (!chart) return;
  chart.style.opacity = grow ? "1" : "0.6";
  grow = !grow;
}, 1500);
