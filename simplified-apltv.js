// Enhancements for image preloading and controlled fade transitions
document.addEventListener('DOMContentLoaded', () => {
  const displayImage = document.getElementById('display-image');
  const images = []; // This will be populated by fetchAndPreloadImages
  const basePath = window.location.origin; // Gets the base path of your site

  function changeImage() {
      console.log('Starting image change...');
      displayImage.classList.remove('fade-in');
      displayImage.classList.add('fade-out');

      // Using setTimeout to wait for fade-out to complete
      setTimeout(() => {
          const currentUrl = displayImage.src;
          const currentIndex = images.findIndex(img => basePath + img === currentUrl);
          console.log('Current index:', currentIndex);

          const nextIndex = (currentIndex + 1) % images.length;
          displayImage.src = basePath + images[nextIndex]; // Set the next image source
          displayImage.classList.remove('fade-out');
          displayImage.classList.add('fade-in');
      }, 6000); // Wait for the 6s fade-out to complete
  }

  function fetchAndPreloadImages(jsonUrl) {
      fetch(jsonUrl)
      .then(response => response.json())
      .then(data => {
          data.forEach(item => {
              images.push(item.url); // Directly push the path part from JSON
          });
          console.log('Images loaded:', images);
          displayImage.src = basePath + images[0]; // Set the initial image
          displayImage.classList.add('fade-in');
          setInterval(changeImage, 42000); // Change image every 42 seconds (30s display + 6s fade-in-out)
      })
      .catch(error => {
          console.error('Error loading images:', error);
      });
  }

  fetchAndPreloadImages('/apltv/channel/playa.json'); // Updated to use the correct JSON path
});
