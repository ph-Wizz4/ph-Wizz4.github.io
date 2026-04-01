const themes = ['dark', 'light', 'oled'];

function getInitialTheme() {
    const saved = localStorage.getItem('theme');
    if (saved && themes.includes(saved)) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

let currentThemeIndex = themes.indexOf(getInitialTheme());
if (currentThemeIndex === -1) currentThemeIndex = 0;
document.body.setAttribute('data-theme', themes[currentThemeIndex]);

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    const msg = document.createElement('div');
    msg.className = 'fixed bottom-8 right-8 bg-primary text-black px-4 py-2 rounded-lg font-bold shadow-lg z-50 transition-opacity duration-500';
    msg.innerText = `Theme: ${newTheme.toUpperCase()}`;
    document.body.appendChild(msg);

    setTimeout(() => {
        msg.style.opacity = '0';
        setTimeout(() => msg.remove(), 500);
    }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', cycleTheme);
    }

    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
