// Dynamic Year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme Toggle Logic
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
  document.body.classList.toggle("professional");
  document.body.classList.toggle("founder");

  const isFounder = document.body.classList.contains("founder");

  if (isFounder) {
    document.getElementById("greeting").textContent =
      "Future Billionaire Tech Founder";
    document.getElementById("tagline").textContent =
      "Somebody who's tryna be better everyday 🚀";
    document.getElementById("project1").textContent =
      "Building scalable rental systems to dominate the market.";
    document.getElementById("project2").textContent =
      "Creating elite animated websites that stand out.";
  } else {
    document.getElementById("greeting").textContent =
      "Software Developer";
    document.getElementById("tagline").textContent =
      "Passionate developer focused on continuous growth.";
    document.getElementById("project1").textContent =
      "Developed a rental platform using Flutter and Supabase.";
    document.getElementById("project2").textContent =
      "Designed responsive websites with modern UI practices.";
  }
});