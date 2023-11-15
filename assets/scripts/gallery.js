//galllery.js
const galleryImages = [
  {
    imageUrl: "assets/img/story1.jpg",
    text: "'Success is a hard journey that very few can survive.' oww wait. it will change !!"
  },
  {
    imageUrl: "assets/img/story2.jpeg",
    text: "1234 12343493993 34834 3438203 34293403 234324 4324 3299 33 344 2234 2343 343... btw Thank YOU!!!"
  },
  {
    imageUrl: "assets/img/sad_story.jpg",
    text: "It didnt have to be like that..."
  },
  // Add more image URLs and corresponding text as needed
];

let currentImageIndex = 0;
const galleryContainer = document.querySelector('.home .gallery');

function rotateGallery() {
  const galleryImage = document.getElementById("galleryImage");
  const galleryText = document.getElementById("galleryText");

  galleryContainer.classList.remove('active'); // Remove active class
  setTimeout(() => {
    galleryImage.src = galleryImages[currentImageIndex].imageUrl;
    galleryText.textContent = galleryImages[currentImageIndex].text;
    galleryContainer.classList.add('active'); // Add active class after content change
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
  }, 500); // Delay the content change to match the transition duration
}

rotateGallery(); // Call rotateGallery function once to set the initial image
setInterval(rotateGallery, 7000); // Rotate the gallery every 5 seconds
//end
