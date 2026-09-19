const imageContainer = document.getElementById('imageContainer');
const heartAnimation = document.getElementById('heartAnimation');
const likeBtn = document.getElementById('likeBtn');
const likesCount = document.getElementById('likesCount');

let isLiked = false;
let currentLikes = 1248;

// Function to handle liking/unliking
function toggleLike() {
  isLiked = !isLiked;
  if (isLiked) {
    likeBtn.textContent = '❤️';
    currentLikes++;
  } else {
    likeBtn.textContent = '🤍';
    currentLikes--;
  }
  likesCount.textContent = `${currentLikes.toLocaleString()} likes`;
}

// 1. Like button click event
likeBtn.addEventListener('click', toggleLike);

// 2. Double-click event on the photo container
imageContainer.addEventListener('dblclick', () => {
  // Trigger the pop-up heart animation
  heartAnimation.classList.add('animate');
  setTimeout(() => {
    heartAnimation.classList.remove('animate');
  }, 800); // Removes class after 800ms

  // Automatically like the post if it isn't liked yet
  if (!isLiked) {
    toggleLike();
  }
});