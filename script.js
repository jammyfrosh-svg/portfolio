const exploreBtn = document.querySelector('.btn');

exploreBtn.addEventListener('click', function(event) {
    event.preventDefault(); 
    alert("Welcome to the lab!");
});
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thanks for reaching out, JOHNZCYKE will get back to you soon!");
    contactForm.reset(); // This clears the form after you send
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // This creates a popup to confirm the message was "sent"
    alert("Thanks for reaching out, " + this.querySelectorAll('input')[0].value + "! I'll get back to you soon.");
    
    // Clears the form
    this.reset();
});