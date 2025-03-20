document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');
    const feedback = document.getElementById('registration-feedback');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const facebookName = registerForm['facebook-name'].value.trim();
        if (facebookName) {
            feedback.textContent = 'Registration successful! You can now play the game. 🎉';
            // Save user data and proceed
        } else {
            feedback.textContent = 'Please enter your Facebook name. ❗';
        }
    });
});