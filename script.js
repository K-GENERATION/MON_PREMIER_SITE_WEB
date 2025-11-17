document.getElementById('contactForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Merci, votre message/question a ete envoye !');
    this.reset();
});
