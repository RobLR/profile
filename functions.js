"use strict";
class Skill {
    constructor(skillName, logo, altText, carouselPosition) {
        this.skillName = skillName;
        this.logo = logo;
        this.altText = altText;
        this.carouselPosition = carouselPosition;
    }
}
// Initially renders the skills on the page
function constructSkills() {
    let carousel = document.getElementById("carousel");
    carousel.innerHTML = "";
    for (let i in skills) {
        let skill = document.createElement("img");
        skill.src = `${skills[i].logo}`;
        skill.alt = `${skills[i].altText}`;
        skill.id = `${skills[i].skillName}`;
        if (skills[i].carouselPosition == (Math.ceil(skills.length / 2) - 2)) {
            skill.className = "skill enterLeft";
        }
        else if (skills[i].carouselPosition == (Math.ceil(skills.length / 2) - 1)) {
            skill.className = "skill leftSkill";
        }
        else if (skills[i].carouselPosition == (Math.ceil(skills.length / 2))) {
            skill.className = "skill middleSkill";
        }
        else if (skills[i].carouselPosition == (Math.ceil(skills.length / 2) + 1)) {
            skill.className = "skill rightSkill";
        }
        else if (skills[i].carouselPosition == (Math.ceil(skills.length / 2) + 2)) {
            skill.className = "skill enterRight";
        }
        else {
            skill.className = "skill hiddenSkill";
        }
        carousel.appendChild(skill);
    }
}
// Updates the skills location (tried just using renderSkills instead but as that removes the old skills and creates new ones, I can't use CSS transitions)
function updateSkills() {
    for (let i in skills) {
        let currentSkill = document.getElementById(`${skills[i].skillName}`);
        if (skills[i].carouselPosition == (Math.ceil(skills.length / 2) - 2)) {
            currentSkill.className = "skill enterLeft";
        }
        else if (skills[i].carouselPosition == (Math.ceil(skills.length / 2) - 1)) {
            currentSkill.className = "skill leftSkill";
        }
        else if (skills[i].carouselPosition == (Math.ceil(skills.length / 2))) {
            currentSkill.className = "skill middleSkill";
        }
        else if (skills[i].carouselPosition == (Math.ceil(skills.length / 2) + 1)) {
            currentSkill.className = "skill rightSkill";
        }
        else if (skills[i].carouselPosition == (Math.ceil(skills.length / 2) + 2)) {
            currentSkill.className = "skill enterRight";
        }
        else {
            currentSkill.className = "skill hiddenSkill";
        }
    }
}
// Triggered by clicking the right arrow on the carousel, subtracts 1 from carousel position, and if it is =<0 sets carousel position to skills.length
function right() {
    for (let i in skills) {
        skills[i].carouselPosition -= 1;
        if (skills[i].carouselPosition <= 0) {
            skills[i].carouselPosition = skills.length;
        }
    }
    updateSkills();
}
// Triggered by clicking the left arrow on the carousel, adds 1 to carousel position, and if it is > skills.length sets carousel position to 1
function left() {
    for (let i in skills) {
        skills[i].carouselPosition += 1;
        if (skills[i].carouselPosition > skills.length) {
            skills[i].carouselPosition = 1;
        }
    }
    updateSkills();
}
// Open contact form
function openContactForm() {
    contactForm.showModal();
}
// Close contact form
function closeContactForm() {
    contactForm.close();
}
