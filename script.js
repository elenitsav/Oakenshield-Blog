// Smooth scroll to section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Show hidden message in Addressing Other Nations section with animation
function showMessage() {
    const message = document.getElementById('message');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
        message.classList.add('show'); // Add the 'show' class for fade-in effect
    } else {
        message.classList.remove('show'); // Remove the 'show' class for fade-out effect
        setTimeout(() => message.classList.add('hidden'), 500); // Delay adding 'hidden' to allow fade-out
    }
}
