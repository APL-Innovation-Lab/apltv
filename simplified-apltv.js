console.log('hello');
//document.addEventListener('DOMContentLoaded', function() {
    const displayImage = document.getElementById('display-image');
    const contentUrl = 'https://library.austintexas.gov/apltv/channel/5054/play.json';  // URL to fetch content

    // Function to dynamically create a style sheet
    function createStyleSheet() {
        const style = document.createElement('style');
        document.head.appendChild(style);
        style.sheet.insertRule(`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            img.fade-in {
                animation: fade-in 2s;
            }
        `, style.sheet.cssRules.length);
        console.log('Style sheet created and added to the document.'); // Log when stylesheet is added
    }

    async function fetchContent() {
        console.log('Fetching content from:', contentUrl); // Log fetching attempt
        try {
            const response = await fetch(contentUrl);
            const data = await response.json();
            const urls = data.map(item => 'https://library.austintexas.gov' + item.url);
            console.log('Fetched and processed content URLs:', urls); // Log the URLs after processing
            return urls;
        } catch (error) {
            console.error('Failed to fetch content:', error);
            return [];  // Return empty in case of error to prevent app crash
        }
    }

    async function updateContent() {
        const contentUrls = await fetchContent();
        console.log('Content URLs to display:', contentUrls); // Log the final URLs to be displayed
        let currentIndex = 0;

        function cycleContent() {
            if (contentUrls.length === 0) {
                console.log('No content to display.'); // Log if there's no content
                return;  // Avoid running if no content is fetched
            }
            console.log('Displaying image:', contentUrls[currentIndex]); // Log current image being displayed
            displayImage.src = contentUrls[currentIndex];
            displayImage.classList.add('fade-in');

            setTimeout(() => {
                displayImage.classList.remove('fade-in');
                currentIndex = (currentIndex + 1) % contentUrls.length;
                console.log('Scheduled next image display.'); // Log when next image is scheduled
                setTimeout(cycleContent, 3000);  // Change to your desired display time
            }, 5000);  // Content display duration
        }

        cycleContent();  // Start displaying content
    }

    createStyleSheet();  // Ensure the style sheet is created
    updateContent();  // Start fetching and displaying content
//});
