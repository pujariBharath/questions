const toggleMode = document.getElementById('toggleMode');
const body = document.body;

toggleMode.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Change icon
  const icon = toggleMode.querySelector('.toggle-icon');
  icon.textContent = body.classList.contains('dark-mode') ? '🌙' : '☀️';
});

const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const confirmBtn = document.getElementById("confirm-btn");

let selected = null;

yesBtn.addEventListener("click", () => {
  selected = "Yes";
  yesBtn.style.backgroundColor = "#000";
  yesBtn.style.color = "#fff";
  noBtn.style.backgroundColor = "transparent";
  noBtn.style.color = "#000";
  enableConfirm();
});

noBtn.addEventListener("click", () => {
  selected = "No";
  noBtn.style.backgroundColor = "#000";
  noBtn.style.color = "#fff";
  yesBtn.style.backgroundColor = "transparent";
  yesBtn.style.color = "#000";
  enableConfirm();
});

function enableConfirm() {
  confirmBtn.disabled = false;
  confirmBtn.classList.add("enabled");
}

confirmBtn.addEventListener("click", () => {
  if (selected) {
    alert(`You selected: ${selected}`);
  }
});
