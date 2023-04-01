  

  function redirectToSearch(event) {
    event.preventDefault(); // prevent the default form submission behavior
    window.location.href = "search.html";
  }
  
  // Function to handle image upload
  function uploadImage() {
    // Get the file input element
    var fileInput = document.getElementById("myFile");
    
    // Get the first file selected by the user
    var file = fileInput.files[0];
    
    // Create a new FormData object
    var formData = new FormData();
    
    // Add the file to the FormData object
    formData.append("file", file);
    
    // Send the FormData object to the server using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/upload-image");
    xhr.send(formData);
    
    // Handle the server's response
    xhr.onload = function() {
      if (xhr.status == 200) {
        // Image uploaded successfully
        console.log(xhr.responseText);
      } else {
        // Error uploading image
        console.log("Error uploading image");
      }
    };
  }
  
  // Event listeners for search and upload buttons
  document.getElementById("search-button").addEventListener("click", redirectToSearch);
  document.getElementById("upload-button").addEventListener("click", uploadImage);
  document.getElementById('upload-btn').addEventListener('click', function() {
    var fileInput = document.getElementById('upload-file');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);
    
   
  });
  function uploadFile() {
    const fileInput = document.getElementById("upload-file");
    const file = fileInput.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      // Call the API to upload the file
      // ...
      console.log("File uploaded successfully!");
    } else {
      console.log("No file selected!");
    }
  }
  
