// Countdown Timer
function startCountdown() {
    const eventDate = new Date("April 30, 2025 00:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const diff = eventDate - now;
        if (diff < 0) {
            document.getElementById("countdown").innerHTML = "Event Started!";
            return;
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m`;
    }, 1000);
}
startCountdown();

// Password Strength Checker
document.getElementById("password").addEventListener("input", function () {
    const password = this.value;
    let strength = "Weak";

    if (password.length >= 6 && /[A-Z]/.test(password) && /\d/.test(password)) {
        strength = "Strong";
    } else if (password.length >= 6) {
        strength = "Medium";
    }

    document.getElementById("passwordStrength").textContent = `Password Strength: ${strength}`;
});

// Registration Form Validation
document.getElementById("registerForm").addEventListener("submit", function (event) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        event.preventDefault();
        document.getElementById("errorMsg").textContent = "Passwords do not match!";
    }
});
