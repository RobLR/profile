"use strict";
// Defining skills
let skills = [
    new Skill("html", "images/html5-plain.svg", "html5 logo", 1),
    new Skill("css", "images/css3-plain.svg", "css3 logo", 2),
    new Skill("js", "images/javascript-original.svg", "javascript logo", 3),
    new Skill("ts", "images/typescript-original.svg", "typescript logo", 4),
    new Skill("git", "images/git-original.svg", "git logo", 5),
    new Skill("github", "images/github-original.svg", "github logo", 6)
];
// Initially renders skills
constructSkills();
// Listens for next skill
let rightArrow = document.getElementById("rightArrow");
rightArrow.addEventListener("click", right);
// Listens for previous skill
let leftArrow = document.getElementById("leftArrow");
leftArrow.addEventListener("click", left);
