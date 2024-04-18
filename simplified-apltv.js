console.log('hello');

const displayImage = document.getElementById('display-image');
const contentUrl = '/apltv/channel/playa.json'; // Local URL to fetch content

// Function to dynamically create a style sheet for fading animations
function createStyleSheet() {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fade-in-out {
      0%, 100% { opacity: 0; }
      5%, 95% { opacity: 1; }
    }
    img.fade-in-out {
      animation: fade-in-out 34s linear infinite;
    }
  `;
  document.head.appendChild(style);
  console.log('Style sheet created and added to the document.'); // Log when stylesheet is added
}

async function fetchContent() {
  console.log('Fetching content from:', contentUrl); // Log fetching attempt
  try {
    const response = await fetch(contentUrl);
    const data = await response.json();
    const urls = data.map(item => item.url);
    console.log('Fetched and processed content URLs:', urls); // Log the URLs after processing
    return urls;
  } catch (error) {
    console.error('Failed to fetch content:', error);
    return []; // Return empty in case of error to prevent app crash
  }
}

async function updateContent() {
  const contentUrls = await fetchContent();
  console.log('Content URLs to display:', contentUrls); // Log the final URLs to be displayed
  let currentIndex = 0;

  function cycleContent() {
    if (contentUrls.length === 0) {
      console.log('No content to display.'); // Log if there's no content
      return; // Avoid running if no content is fetched
    }
    console.log('Displaying image:', contentUrls[currentIndex]); // Log current image being displayed
    displayImage.src = contentUrls[currentIndex];
    displayImage.classList.add('fade-in-out');
    currentIndex = (currentIndex + 1) % contentUrls.length;
    console.log('Scheduled next image display.'); // Log when next image is scheduled
  }

  setInterval(cycleContent, 34000); // 34 seconds for each complete animation cycle
}

createStyleSheet(); // Ensure the style sheet is created
updateContent(); // Start fetching and displaying content
