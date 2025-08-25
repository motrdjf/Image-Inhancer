function previewImage(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const originalImage = document.getElementById("originalImage");
    originalImage.src = e.target.result;
    originalImage.style.display = "block";

    // Hide placeholder
    originalImage.nextElementSibling.style.display = "none";
  };
  reader.readAsDataURL(file);
}

function enhanceImage() {
  const enhancedImage = document.getElementById("enhancedImage");
  const originalImage = document.getElementById("originalImage");
  const status = document.getElementById("status");

  if (!originalImage.src) {
    status.textContent = "Please upload an image first!";
    status.style.display = "block";
    status.className = "status error";
    return;
  }

  status.textContent = "Enhancing image... (Demo only)";
  status.style.display = "block";
  status.className = "status success";

  // For now, just copy original image
  enhancedImage.src = originalImage.src;
  enhancedImage.style.display = "block";
  enhancedImage.nextElementSibling.style.display = "none";
}

