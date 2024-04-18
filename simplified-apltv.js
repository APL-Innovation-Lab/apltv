document.addEventListener('DOMContentLoaded', function() {
    const displayImage = document.getElementById('display-image');
    const contentUrl = 'https://library.austintexas.gov/apltv/channel/5054/play.json';  // URL to fetch content

    async function fetchContent() {
        try {
            const response = await fetch(contentUrl);
            const data = await response.json();
            return data.map(item => 'https://library.austintexas.gov' + item.url);  // Adjusting path if necessary
        } catch (error) {
            console.error('Failed to fetch content:', error);
            return [];  // Return empty in case of error to prevent app crash
        }
    }

    async function updateContent() {
        const contentUrls = await fetchContent();
        let currentIndex = 0;

        function cycleContent() {
            if (contentUrls.length === 0) return;  // Avoid running if no content is fetched
            displayImage.src = contentUrls[currentIndex];
            displayImage.classList.add('fade-in');
            setTimeout(() => {
                displayImage.classList.remove('fade-in');
                currentIndex = (currentIndex + 1) % contentUrls.length;
                setTimeout(cycleContent, 3000);  // Change to your desired display time
            }, 5000);  // Content display duration
        }

        cycleContent();  // Start displaying content
    }

    updateContent();  // Start fetching and displaying content
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
