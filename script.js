// JavaScript to handle modal pop-up functionality

function openModal(imgSrc, title, price, description) {
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDescription').innerText = description;
    document.getElementById('modalPrice').innerText = price;
    document.getElementById('popupModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('popupModal').style.display = 'none';
}

function buyNow() {
    alert('Redirecting to purchase page for a single item...');
}

function buyInBulk() {
    alert('Redirecting to bulk purchase page...');
}

// Slideshow JavaScript
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start the slideshow when the page loads
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});
