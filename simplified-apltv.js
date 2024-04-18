document.addEventListener('DOMContentLoaded', function() {
    const displayImage = document.getElementById('display-image');
    const contentUrls = ['/images/event1.jpg', '/images/event2.jpg'];  // List your content URLs here
    let currentIndex = 0;

    function updateContent() {
        displayImage.src = contentUrls[currentIndex];
        displayImage.classList.add('fade-in');
        setTimeout(() => {
            displayImage.classList.remove('fade-in');
            currentIndex = (currentIndex + 1) % contentUrls.length;
            setTimeout(updateContent, 3000);  // Change to your desired display time
        }, 5000);  // Content display duration
    }

    updateContent();  // Start displaying content
});

// CSS animations for fade-in and fade-out
document.styleSheets[0].insertRule(`
    @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    img.fade-in {
        animation: fade-in 2s;
    }
`, document.styleSheets[0].cssRules.length);
