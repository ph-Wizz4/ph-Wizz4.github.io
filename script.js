const themes = ['dark', 'light', 'oled'];
let currentThemeIndex = 0;

function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    const newTheme = themes[currentThemeIndex];
    document.body.setAttribute('data-theme', newTheme);
    
    const msg = document.createElement('div');
    msg.className = 'fixed bottom-8 right-8 bg-[#FFD700] text-black px-4 py-2 rounded-lg font-bold shadow-lg z-50 transition-opacity duration-500';
    msg.innerText = `Theme: ${newTheme.toUpperCase()}`;
    document.body.appendChild(msg);
    
    setTimeout(() => {
        msg.style.opacity = '0';
        setTimeout(() => msg.remove(), 500);
    }, 1500);
}
