function findAndPopOutVideo() {
  // Look for the YouTube-specific video element first
  let video = document.querySelector('video.html5-main-video');

  // If not on YouTube or YouTube's video isn't found, look for a generic video tag
  if (!video) {
    video = document.querySelector('video');  // This will target any <video> element on other websites
  }

  if (video) {
    // If a video is found, request Picture-in-Picture
    video.requestPictureInPicture().catch((error) => {
      console.error('Picture-in-Picture error:', error);
    });
  } else {
    // If no video is found, try again after a short delay
    console.log('No video found yet, retrying...');
    setTimeout(findAndPopOutVideo, 1000); // Retry every second
  }
}

// Start the video detection process
findAndPopOutVideo();
