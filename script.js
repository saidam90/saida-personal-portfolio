// // Get the images and store them in an array
// const images = [  "image1.jpg",  "image2.jpg",  "image3.jpg",  "image4.jpg",];

// // Set a variable to keep track of the current image index
// let currentIndex = 0;

// // Get the image element and set its source to the first image in the array
// const slideshow = document.getElementById("slideshow");
// slideshow.src = images[currentIndex];

// // Create a function to advance to the next image
// function nextImage() {
//   // Increment the current index
//   currentIndex++;
//   // If the index is greater than or equal to the number of images, reset it to 0
//   if (currentIndex >= images.length) {
//     currentIndex = 0;
//   }
//   // Set the image source to the current image
//   slideshow.src = images[currentIndex];
// }

// // Call the nextImage function every 3 seconds to create a slideshow
// setInterval(nextImage, 3000);
