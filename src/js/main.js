const text = " Designer & </Developer>";
const typingText = document.getElementById("typing-text");

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;

        setTimeout(typeWriter, 100);
    }
}

typeWriter();


const navLinks = document.querySelectorAll(".nav-links a ");
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        navLinks.forEach(link => link.classList.remove("active"));
        this.classList.add("active");
    });
});