// handle profile icon click
const profileIcon = document.getElementById("profile-icon");
profileIcon.addEventListener("click", () => {
  // show/hide profile dropdown menu
  const profileMenu = document.getElementById("profile-menu");
  profileMenu.classList.toggle("hidden");
});

// handle search button click
const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", () => {
  // get search query from input field
  const searchInput = document.getElementById("search-input");
  const searchQuery = searchInput.value.trim();

  // perform search using searchQuery...
  console.log(`Performing search for "${searchQuery}"...`);
});

// handle image upload
const imageInput = document.getElementById("image-input");
imageInput.addEventListener("change", () => {
  // get selected image file
  const imageFile = imageInput.files[0];

  // create image preview
  const imagePreview = document.getElementById("image-preview");
  const imagePreviewUrl = URL.createObjectURL(imageFile);
  imagePreview.style.backgroundImage = `url(${imagePreviewUrl})`;
});
