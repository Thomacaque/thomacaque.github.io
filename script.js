document.addEventListener('DOMContentLoaded', function() {
    const viewLargerLinks = document.querySelectorAll('.view-larger');
    const imageViewer = document.getElementById('image-viewer');
    const viewerImage = document.querySelector('.viewer-image');
    const closeButton = document.querySelector('.close-button');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const galleryItems = document.querySelectorAll('.gallery-item img');
    let currentIndex = 0;

    viewLargerLinks.forEach((link, index) => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            currentIndex = index;
            viewerImage.src = this.getAttribute('href');
            imageViewer.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function() {
        imageViewer.style.display = 'none';
    });

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        viewerImage.src = galleryItems[currentIndex].src;
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        viewerImage.src = galleryItems[currentIndex].src;
    });

    imageViewer.addEventListener('click', function(event) {
        if (event.target === imageViewer || event.target === closeButton) {
            imageViewer.style.display = 'none';
        }
    });
});
