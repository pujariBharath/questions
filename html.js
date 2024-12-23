const toggleMode = document.getElementById('toggleMode');
const body = document.body;

toggleMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Change icon
    const icon = toggleMode.querySelector('.toggle-icon');
    icon.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
});
const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit-btn');

// Event listener for the Submit button
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission
  
  const email = emailInput.value.trim();
  
  // Email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (emailPattern.test(email)) {
    // If the email is valid, redirect to the next page
    window.location.href = "1st.html"; // Replace with your target page
  } else {
    alert("Please enter a valid email address.");
  }
});
