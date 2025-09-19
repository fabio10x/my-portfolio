const themeToggleButton = document.querySelector('#theme-toggle');
const body = document.querySelector('body');
themeToggleButton.addEventListener('click', function() {
    // This line stays the same. It toggles the class.
    body.classList.toggle('light-mode');

    // Now, we add our logic to check the current theme.
    if (body.classList.contains('light-mode')) {
        // IF the body now has the 'light-mode' class...
        themeToggleButton.textContent = 'Switch to Dark Mode';
    } else {
        // ELSE (if it does not have the class)...
        themeToggleButton.textContent = 'Switch to Light Mode';
    }
});