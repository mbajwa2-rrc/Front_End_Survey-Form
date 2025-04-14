document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("language");
    const otherLangDiv = document.getElementById("otherLangDiv");
    const rating = document.getElementById("rating");
    const ratingValue = document.getElementById("ratingValue");
    const form = document.getElementById("surveyForm");
  
    // Show/hide "Other" input
    languageSelect.addEventListener("change", function () {
      otherLangDiv.classList.toggle("hidden", this.value !== "Other");
    });
  
    // Display slider value
    rating.addEventListener("input", () => {
      ratingValue.textContent = rating.value;
    });
  
    // Form validation
    form.addEventListener("submit", function (e) {
      let isValid = true;
  
      const fullName = document.getElementById("fullName");
      const email = document.getElementById("email");
      const age = document.getElementById("age");
      const consent = document.getElementById("consent");
  
      // Full name validation
      if (fullName.value.trim() === "") {
        document.getElementById("nameError").textContent = "Full name is required.";
        isValid = false;
      } else {
        document.getElementById("nameError").textContent = "";
      }
  
      // Email validation
      const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailRegex.test(email.value)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
      } else {
        document.getElementById("emailError").textContent = "";
      }
  
      // Age validation
      if (age.value < 13 || age.value > 120) {
        document.getElementById("ageError").textContent = "Enter a valid age between 13 and 120.";
        isValid = false;
      } else {
        document.getElementById("ageError").textContent = "";
      }
  
      // Consent checkbox
      if (!consent.checked) {
        document.getElementById("consentError").textContent = "You must agree to continue.";
        isValid = false;
      } else {
        document.getElementById("consentError").textContent = "";
      }
  
      if (!isValid) e.preventDefault();
    });
  });
  