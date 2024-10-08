document.querySelector('.cta-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#learn-more').scrollIntoView({ behavior: 'smooth' });
});
