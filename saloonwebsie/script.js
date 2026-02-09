function callNow() {
    window.location.href = "tel:+919505123456";
}

function bookNow() {
    alert("Appointment booking coming soon ✨");
}

/* smooth scroll */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
