// Function that physically adds or removes your CSS file
function applyTheme(isDark) {
    let link = document.getElementById('jutge-dark-style');
    
    if (isDark) {
        if (!link) {
            // Create a <link> tag to inject your CSS
            link = document.createElement('link');
            link.id = 'jutge-dark-style';
            link.rel = 'stylesheet';
            link.href = chrome.runtime.getURL('css/dark.css');
            document.head.appendChild(link);
        }
    } else {
        // Remove the CSS if it exists
        if (link) link.remove();
    }
}

// 1. When the page first loads, check memory and apply the theme
chrome.storage.local.get('isDark', (data) => {
    applyTheme(data.isDark);
});

// 2. Listen for the live message from the popup menu
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggle") {
        applyTheme(request.isDark);
    }
});