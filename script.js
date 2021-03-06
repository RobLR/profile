"use strict";
// Defining skills
let skills = [
    new Skill("html", "graphics/icons/html5.svg", "html5 logo", 1),
    new Skill("css", "graphics/icons/css3.svg", "css3 logo", 2),
    new Skill("js", "graphics/icons/javascript.svg", "javascript logo", 3),
    new Skill("ts", "graphics/icons/typescript.svg", "typescript logo", 4),
    new Skill("git", "graphics/icons/git.svg", "git logo", 5),
    new Skill("github", "graphics/icons/github.svg", "github logo", 6)
];
// Initially renders skills
constructSkills();
// Listens for next skill
let rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", right);
// Listens for previous skill
let leftArrow = document.getElementById("leftArrow");
leftArrow.addEventListener("click", left);
// Listens for opening contact form
let emailButton = document.getElementById("email");
emailButton.addEventListener("click", openContactForm);
// Listens for closing contact form
let closeContactBtn = document.getElementById("closeContact");
closeContactBtn.addEventListener("click", closeContactForm);
const contactForm = document.getElementById("contactForm");
