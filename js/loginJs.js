function showLogin() {
    document.getElementById('signUpPage').classList.remove('active');
    document.getElementById('welcomePage').classList.remove('active');
    document.getElementById('loginPage').classList.add('active');
}

function showWelcome() {
    document.getElementById('signUpPage').classList.remove('active');
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('welcomePage').classList.add('active');
}

function showSignUp() {
    document.getElementById('welcomePage').classList.remove('active');
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('signUpPage').classList.add('active'); 
}

// Add some interactive animations
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.style.animationDelay = `${index * 0.5}s`;
        star.style.animation = 'twinkle 2s infinite alternate';
    });
});

// Add CSS animation for stars dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0% { opacity: 0.3; transform: scale(1); }
        100% { opacity: 0.8; transform: scale(1.2); }
    }
`;
document.head.appendChild(style);
