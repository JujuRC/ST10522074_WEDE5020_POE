const questions = document.querySelectorAll(".but");
questions.forEach(header => {
    header.addEventListener("click", function() {
        const ans= this.nextElementSibling;
        ans.classList.toggle("active");
    });
});
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const reason = document.getElementById("reason").value;
        const message = document.getElementById("message").value.trim();
        const feedbackBox = document.getElementById("formFeedback");
        feedbackBox.style.display = "none";
        if (name.length < 2) {
            feedbackBox.textContent = "Please enter your name.";
            feedbackBox.style.display = "block";
            feedbackBox.style.backgroundColor = "#fde8e8";
            feedbackBox.style.color = "#e53e3e";
            return;
        }
        if (!email.includes("@") || email.length < 5) {
            feedbackBox.textContent = "Please enter a valid email address.";
            feedbackBox.style.display = "block";
            feedbackBox.style.backgroundColor = "#fde8e8";
            feedbackBox.style.color = "#e53e3e";
            return;
        }
        if (reason === "") {
            feedbackBox.textContent = "Please select how we can help you.";
            feedbackBox.style.display = "block";
            feedbackBox.style.backgroundColor = "#fde8e8";
            feedbackBox.style.color = "#e53e3e";
            return;
        }
        if (message.length < 5) {
            feedbackBox.textContent = "Please type out a message before sending.";
            feedbackBox.style.display = "block";
            feedbackBox.style.backgroundColor = "#fde8e8";
            feedbackBox.style.color = "#e53e3e";
            return;
        }
        feedbackBox.textContent = "Processing message via AJAX...";
        feedbackBox.style.display = "block";
        feedbackBox.style.backgroundColor = "#def7ec";
        feedbackBox.style.color = "#03543f";
        setTimeout(() => {
            feedbackBox.textContent = "Compiling email application... Opening mail app!";
            const recipient = "info@knightly.co.za"; 
            const subject = encodeURIComponent(`NGO Help Request: ${reason}`);
            const body = encodeURIComponent(`Sender: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
            contactForm.reset();
        }, 1200);
    });
}