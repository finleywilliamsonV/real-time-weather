// Add key listener to textbox, so enter submits
const input = document.getElementById('address-input');
const button = document.getElementById('address-submit-btn');

console.log(button);

input.addEventListener('keyup', function(e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    document.getElementById('address-submit-btn').click();
  }
});
