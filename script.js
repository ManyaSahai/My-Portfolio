function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");

  if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");

      // Show the popup
      showPopup();

      // Display the SVG image
      document.getElementById("popup-img").style.display = "block";

      // Reset the textarea
      recommendation.value = "";
  }
}

function showPopup() {
  document.getElementById('popup').style.visibility = 'visible';
}

function hidePopup() {
  document.getElementById('popup').style.visibility = 'hidden';
}
