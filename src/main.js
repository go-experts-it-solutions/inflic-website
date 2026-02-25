const images = document.querySelectorAll('.screen-image');
let currentIndex = 0;

function rotateImages() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(rotateImages, 4000);

// Simple button enable logic
const inputs = document.querySelectorAll('.input-field');
const loginBtn = document.querySelector('.btn-login');
const loginForm = document.getElementById('loginForm');
const successMessage = document.getElementById('successMessage');

inputs.forEach(input => {
  input.addEventListener('input', () => {
    const isFilled = Array.from(inputs).every(i => i.value.length > 0);
    loginBtn.disabled = !isFilled;
  });
});

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate loading state
    loginBtn.classList.add('loading');
    loginBtn.innerText = 'Loging in...';
    loginBtn.disabled = true;

    setTimeout(() => {
      loginForm.style.display = 'none';
      successMessage.style.display = 'flex';
    }, 1500);
  });
}
