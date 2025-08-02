// ======= عرض الصفحات =======
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

// ======= إضافة بطاقة جديدة وإرسالها إلى API =======
document.getElementById("cardForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const imageInput = document.getElementById("imageFile");
    const file = imageInput.files[0];

    if (!file) {
        alert("Please select an image.");
        return;
    }

    const reader = new FileReader();

    reader.onload = async function(event) {
        const imageUrl = event.target.result;
        const now = new Date();
        const formattedDate = now.toISOString().split('T')[0];

        // إرسال البطاقة إلى API
        const response = await fetch("http://localhost:3000/api/cards", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                location,
                description,
                imageBase64: imageUrl,
                date: formattedDate
            })
        });

        if (response.ok) {
            const newCard = `
                <div class="col-md-4 mb-4">
                    <div class="card shadow-sm h-100 text-center">
                        <img src="${imageUrl}" class="mx-auto d-block mt-3" style="width: 120px; height: 120px; object-fit: cover;" alt="Image">
                        <div class="card-body">
                            <h5 class="card-title"></h5>
                            <p class="card-text text-muted">${description}</p>
                            <ul class="list-unstyled">
                                <li><strong>📍 Location:</strong> ${location}</li>
                            </ul>
                            <a href="#" class="btn btn-sm btn-success mt-2">Book now</a>
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
        } else {
            alert("فشل في إرسال البيانات إلى السيرفر.");
        }
    };

    reader.readAsDataURL(file);
});

// ======= تحميل البطاقات من API عند تشغيل الصفحة =======
window.onload = async function() {
    const response = await fetch("http://localhost:3000/api/cards");
    const cards = await response.json();

    cards.forEach(card => {
        const cardHtml = `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100 text-center">
                    <img src="${card.imageBase64}" class="mx-auto d-block mt-3" style="width: 120px; height: 120px; object-fit: cover;" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text text-muted">${card.description}</p>
                        <ul class="list-unstyled">
                            <li><strong>📍 Location:</strong> ${card.location}</li>
                        </ul>
                        <a href="#" class="btn btn-sm btn-success mt-2">Book now</a>
                    </div>
                    <div class="card-footer text-muted text-end">
                        Published ${card.date}
                    </div>
                </div>
            </div>
        `;
        document.getElementById("cardsRow").insertAdjacentHTML('beforeend', cardHtml);
    });
};

// ======= تحريك النجوم (twinkle animation) =======
document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        star.style.animationDelay = `${index * 0.5}s`;
        star.style.animation = 'twinkle 2s infinite alternate';
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0% { opacity: 0.3; transform: scale(1); }
        100% { opacity: 0.8; transform: scale(1.2); }
    }
`;
document.head.appendChild(style);
