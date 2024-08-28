document.addEventListener('DOMContentLoaded', function () {
        const certificate = document.getElementById('certificate');

        certificate.addEventListener('click', function () {
            // Add the 'clicked' class to the certificate container
            this.classList.toggle('clicked');

            // Optional: Remove the 'clicked' class after the transition for a one-time effect
            setTimeout(() => {
                this.classList.toggle('clicked');
            }, 500); // Matches the transition duration
        });
    const names = ["Alice", "Bob", "Charlie", "Diana"];
    const name1 = names[Math.floor(Math.random() * names.length)];
    let name2;
    do {
        name2 = names[Math.floor(Math.random() * names.length)];
    } while (name2 === name1);

    document.getElementById('name1').textContent = "you";
    document.getElementById('name2').textContent = name2;
});
