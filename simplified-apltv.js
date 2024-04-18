console.log('hello');

const displayImage = document.getElementById('display-image');
const contentUrl = '/apltv/channel/playa.json'; // Local URL to fetch content

// Function to dynamically create a style sheet for fading animations
function createStyleSheet() {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes fade-in-out {
      0% { opacity: 0; }
      10%, 90% { opacity: 1; }
      100% { opacity: 0; }
    }
    img.fade-in-out {
      animation: fade-in-out 34s linear infinite;
    }
  `;
  document.head.appendChild(style);
  console.log('Style sheet created and added to the document.'); // Log when stylesheet is added
}

async function fetchContent() {
  console.log('Fetching content from:', contentUrl);
  try {
    const response = await fetch(contentUrl);
    const data = await response.json();
    const urls = data.map(item => item.url);
    console.log('Fetched and processed content URLs:', urls);
    return urls;
  } catch (error) {
    console.error('Failed to fetch content:', error);
    return [];
  }
}

async function updateContent() {
  const contentUrls = await fetchContent();
  if (contentUrls.length === 0) {
    console.log('No content to display.');
    return;
  }
  let currentIndex = 0;
  setInterval(() => {
    console.log('Displaying image:', contentUrls[currentIndex]); // Log current image being displayed
    displayImage.src = contentUrls[currentIndex];
    displayImage.className = 'fade-in-out'; // Ensure class is applied correctly
    currentIndex = (currentIndex + 1) % contentUrls.length;
  }, 34000); // 34 seconds for each complete animation cycle
}

createStyleSheet(); // Ensure the style sheet is created
updateContent(); // Start fetching and displaying content
