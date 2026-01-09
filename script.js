// 1. Change Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#020617'; // Solid dark when scrolling
    } else {
        nav.style.background = 'rgba(2, 6, 23, 0.8)'; // Transparent at top
    }
});

// 2. Handle Booking Form Submission
const moveForm = document.querySelector('form');
moveForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents page reload
    
    const submitBtn = document.querySelector('.btn-submit');
    submitBtn.innerHTML = 'Sending... <i class="fas fa-circle-notch fa-spin"></i>';
    submitBtn.style.opacity = '0.7';

    // Simulate a 2-second delay for the "Premium" feel
    setTimeout(() => {
        alert("Thank you for choosing Kenya One! Your quote request has been sent successfully.");
        submitBtn.innerHTML = 'Secure My Booking';
        submitBtn.style.opacity = '1';
        moveForm.reset();
    }, 2000);
});
const scriptURL = 'https://script.google.com/macros/s/AKfycbxfCpdy8xzCZCFCFqINkPttQZb6V36iUgU5XTn1LwSyXxvSMjVvDj9OC8RlR6L75IKd/exec'
const form = document.getElementById('booking-form')

form.addEventListener('submit', e => {
  e.preventDefault()
  const btn = document.querySelector('.btn-submit')
  btn.disabled = true
  btn.innerHTML = "Sending Details..."

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        alert("Booking Successful! Check your Google Sheet.")
        btn.disabled = false
        btn.innerHTML = "Secure My Booking"
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})