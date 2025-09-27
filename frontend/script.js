
const roles = ["Web Developer", "Competitive Programmer", "ML Enthusiast"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 60;
const delayBetween = 1200; // pause before erasing

function typeEffect() {
    const element = document.getElementById("typing-text");

    if (!isDeleting && charIndex < roles[index].length) {
        currentText += roles[index][charIndex];
        charIndex++;
        element.textContent = currentText;
        setTimeout(typeEffect, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        currentText = currentText.slice(0, -1);
        charIndex--;
        element.textContent = currentText;
        setTimeout(typeEffect, erasingSpeed);
    } else {
        if (!isDeleting) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetween);
        } else {
            isDeleting = false;
            index = (index + 1) % roles.length;
            setTimeout(typeEffect, typingSpeed);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";

}
function closemenu() {
    sidemenu.style.right = "-200px";

}


const form = document.getElementById("contact-form");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent default form submission

    const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    try {
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        msg.textContent = data.msg;
        msg.style.color = res.ok ? "lightgreen" : "red";

        if (res.ok) form.reset();
    } catch (err) {
        msg.textContent = "Something went wrong!";
        msg.style.color = "red";
    }
});

function validateForm() {
    var name = document.getElementsByName("Name").value;
    var email = document.getElementsByName("Email").value;

    // validate name
    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Please enter a valid name");
        return false;
    }

    //validate email
    if (/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
        alert('Invalid email! Please enter a valid email address.');
        return false;
    }

    alert('Form submitted successfully!');
    return true;

}
