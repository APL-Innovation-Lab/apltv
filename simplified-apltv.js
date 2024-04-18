console.log('hello');

const displayImage = document.getElementById('display-image');
const contentUrl = '/apltv/channel/playa.json'; // Local URL to fetch content

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
  }, 38000); // Update to match the new animation cycle time
}

updateContent(); // Start fetching and displaying content
