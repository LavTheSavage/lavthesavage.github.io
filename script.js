const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const mode = document.body.dataset.mode;

if (mode === "professional") {
  const data = {
    greeting: "Software Developer",
    tagline: "Software developer with experience in cross-platform and web application development.",
    techStackText: "Flutter, Java, TypeScript, SQL, Supabase, Responsive Web Development",
    project1: "Rental marketplace app built with structured backend integration and scalable architecture.",
    project2: "Responsive web projects focused on maintainability, accessibility, and performance.",
    interestsText: "Basketball, Gym, Running, Volleyball"
  };

  const greeting = document.getElementById("greeting");
  const tagline = document.getElementById("tagline");
  const techStackText = document.getElementById("techStackText");
  const project1 = document.getElementById("project1");
  const project2 = document.getElementById("project2");
  const interestsText = document.getElementById("interestsText");

  if (greeting) greeting.textContent = data.greeting;
  if (tagline) tagline.textContent = data.tagline;
  if (techStackText) techStackText.textContent = data.techStackText;
  if (project1) project1.textContent = data.project1;
  if (project2) project2.textContent = data.project2;
  if (interestsText) interestsText.textContent = data.interestsText;
}
