const toggleMode = document.getElementById('toggleMode');
const body = document.body;

toggleMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change icon
    const icon = toggleMode.querySelector('.toggle-icon');
    icon.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
});
