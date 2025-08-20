document.addEventListener('DOMContentLoaded', () => {
    const toggleModeButton = document.querySelector('.toggle-mode');
    toggleModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        document.body.classList.toggle('light');
    });
});