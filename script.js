document.addEventListener('DOMContentLoaded', function () {
    const scannerBar = document.querySelector('.scanner-bar');

    // Example of how you might stop the animation after a certain time
    setTimeout(() => {
        scannerBar.style.animation = 'none';
        document.querySelector('p').textContent = 'Thumbprint Scanned Successfully!';
        window.location.href="certificate.html";
    }, 5000); // Stops after 5 seconds
});
