const toggle = document.getElementById('themeToggle');
const text = document.getElementById('statusText');

// 1. When the menu opens, check memory to see if it should be ON or OFF
chrome.storage.local.get('isDark', (data) => {
    toggle.checked = data.isDark || false;
    updateText(toggle.checked);
});

// 2. Listen for clicks on the toggle switch
toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    updateText(isDark);

    // Save the choice to Chrome's memory
    chrome.storage.local.set({ isDark: isDark });

    // Send a message to the Jutge webpage to update immediately
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs && tabs.length > 0 && tabs[0].url && tabs[0].url.includes("jutge.org")) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "toggle", isDark: isDark });
        }
    });
});

// 3. Helper function to change the small text
function updateText(isDark) {
    text.innerText = isDark ? "DARK MODE" : "LIGHT MODE";
}