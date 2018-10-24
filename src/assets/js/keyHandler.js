// Add key listener to textbox, so enter submits
const input = document.getElementById('address-input');

input.addEventListener('keyup', function(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    document.getElementById('address-submit-btn').click();
  }
});
