// Function to add metadata to the website
function addMetadata(title, description, keywords) {
  document.title = title;
  const metaDescription = document.createElement('meta');
  metaDescription.name = 'description';
  metaDescription.content = description;
  document.head.appendChild(metaDescription);
  const metaKeywords = document.createElement('meta');
  metaKeywords.name = 'keywords';
  metaKeywords.content = keywords;
  document.head.appendChild(metaKeywords);
}

// Function to show the submit pop-up
function showSubmitPopup() {
  const popup = document.createElement('div');
  popup.className = 'submit-popup';
  popup.innerHTML = `
    <div class="popup-content">
      <h2>Submission Successful</h2>
      <p>Your form has been submitted successfully.</p>
      <button onclick="closePopup()">Close</button>
    </div>
  `;
  document.body.appendChild(popup);
}

// Function to close the submit pop-up
function closePopup() {
  const popup = document.querySelector('.submit-popup');
  if (popup) {
    popup.remove();
  }
}

// Wrap the JavaScript code inside DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function () {
  // Usage example:
  addMetadata('My Website', 'This is my personal website.', 'HTML, CSS, JavaScript');

  // When the form is submitted
  document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    // Your form submission logic here
    // For the sake of this example, I will show the submit pop-up
    showSubmitPopup();
  });
});
