// Add this inside <script> tags or in a separate file (e.g., script.js)
document.addEventListener('DOMContentLoaded', () => {
    const buttonCircle = document.querySelector('.button-circle');
    const screenContainer = document.querySelector('.screen-container');

    buttonCircle.addEventListener('click', () => {
        // Example of adding an interactive effect
        alert("Starting the application!");
        screenContainer.style.backgroundColor = '#a7e573'; // Change to green on click
        screenContainer.style.transition = 'background-color 0.5s';

        // You would typically navigate to a new page here
        // window.location.href = "next-page.html"; 
    });
});