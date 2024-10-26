let currentZoom = 1;
let isDragging = false;
let startX, startY, translateX = 0, translateY = 0;

function openFullscreen(imageSrc) {
    var overlay = document.getElementById('fullscreenOverlay');
    var fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = imageSrc;
    overlay.style.display = 'block';
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    updateTransform();
}

function closeFullscreen() {
    var overlay = document.getElementById('fullscreenOverlay');
    overlay.style.display = 'none';
}

function zoomImage(delta) {
    currentZoom += delta;
    currentZoom = Math.max(0.1, Math.min(currentZoom, 3)); // Limit zoom between 10% and 300%
    updateTransform();
}

function updateTransform() {
    var fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
}

document.getElementById('fullscreenImage').addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
});

document.addEventListener('mousemove', function(e) {
    if (isDragging) {
        translateX = e.clientX - startX;
        translateY = e.clientY - startY;
        updateTransform();
    }
});

document.addEventListener('mouseup', function() {
    isDragging = false;
});

// Close fullscreen view when clicking outside the image
document.getElementById('fullscreenOverlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeFullscreen();
    }
});

// Prevent zoom controls from closing the fullscreen view
document.querySelector('.zoom-controls').addEventListener('click', function(e) {
    e.stopPropagation();
});