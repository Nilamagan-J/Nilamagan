 /* ================= CURSOR GLOW ================= */

document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("cursor-glow");
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* ================= TEXT SPLITTING ================= */

function splitLettersSelector(selector) {
  document.querySelectorAll(selector).forEach(el => {
    const text = el.innerText;
    el.innerHTML = "";

    [...text].forEach(letter => {
      const span = document.createElement("span");
      if (letter === ' ') {
        span.innerHTML = '&nbsp;';
      } else {
        span.innerText = letter;
      }
      span.classList.add("char");
      el.appendChild(span);
    });
  });
}

splitLettersSelector('.tilt-text');
splitLettersSelector('.name-tilt');

/* ================= MAGNETIC BUTTONS ================= */

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mousemove", e => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = `translate(0,0)`;
  });
});

/* ================= SECTION FADE ON SCROLL ================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight * 0.85) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
});

/* ================= THEME TOGGLE ================= */

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  document.getElementById("themeToggle").textContent = isDark ? "☀️" : "🌙";
});

// Restore saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  document.getElementById("themeToggle").textContent = "☀️";
}

