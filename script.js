// script.js
document.getElementById('qrForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const token = document.getElementById('token').value;
  const responseDiv = document.getElementById('response');

  // Clear previous response
  responseDiv.innerHTML = '';

  fetch('https://script.google.com/macros/s/AKfycbzFDmULFFNJPS7DqpftwNhLSuqOw2LENWmYf2a2scVWBalhkZ8OdJQQztSwDFqMM5oS/exec', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token: token })
  })
  .then(response => response.json())
  .then(data => {
    if (data.verified) {
      responseDiv.innerHTML = `<span style="color: #00ffcc;">Token Verified! You may proceed.</span>`;
    } else {
      responseDiv.innerHTML = `<span style="color: #ff4d4d;">${data.message}</span>`;
    }
  })
  .catch(error => {
    responseDiv.innerHTML = `<span style="color: #ff4d4d;">Error: ${error.message}</span>`;
  });
});
