// script.js

// Initialize Clipboard.js
const clipboard = new ClipboardJS('.copy-btn');

// Add event listener for successful copy action
clipboard.on('success', function(e) {
  e.trigger.textContent = 'Copied!';
  setTimeout(() => {
    e.trigger.textContent = 'Click to Copy IP';
  }, 2000);
});

// Add event listener for copy errors
clipboard.on('error', function(e) {
  e.trigger.textContent = 'Failed!';
  setTimeout(() => {
    e.trigger.textContent = 'Click to Copy IP';
  }, 2000);
});
