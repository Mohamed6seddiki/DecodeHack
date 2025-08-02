
function showLogin() {
    document.getElementById('signUpPage').classList.remove('active');
    document.getElementById('welcomePage').classList.remove('active');
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('loginPage').classList.add('active');
}

function showWelcome() {
    document.getElementById('signUpPage').classList.remove('active');
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('welcomePage').classList.add('active');
}

function showSignUp() {
    document.getElementById('welcomePage').classList.remove('active');
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('signUpPage').classList.add('active'); 
}

function showHome() {
    document.getElementById('signUpPage').classList.remove('active');
    document.getElementById('loginPage').classList.remove('active');
    document.getElementById('welcomePage').classList.remove('active');
    document.getElementById('homePage').classList.add('active');
}
/*adding new card*/
 
document.getElementById("cardForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const imageInput = document.getElementById("imageFile");
    const file = imageInput.files[0];

    if (!file) {
        alert("Please select an immge .");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(event) {
        const imageUrl = event.target.result;

        const now = new Date();
        const formattedDate = now.toISOString().split('T')[0];

        const newCard = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100 text-center">
                    <img src="${imageUrl}" class="mx-auto d-block mt-3" style="width: 120px; height: 120px; object-fit: cover;" alt=" eroo">
                    <div class="card-body">
                        <h5 class="card-title"> </h5>
                        <p class="card-text text-muted">${description}</p>
                        <ul class="list-unstyled">
                            <li><strong>📍 Location:</strong> ${location}</li>
                        </ul>
                        <a href="#" class="btn btn-sm btn-success mt-2"> Book now</a>
                    </div>
                    <div class="card-footer text-muted text-end">
                         Published ${formattedDate}
                    </div>
                </div>
            </div>
        `;

        document.getElementById("cardsRow").insertAdjacentHTML('beforeend', newCard);

        document.getElementById("cardForm").reset();
        const modal = bootstrap.Modal.getInstance(document.getElementById('addCardModal'));
        modal.hide();
    };

    reader.readAsDataURL(file);
});



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


