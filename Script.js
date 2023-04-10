// Get the input element and button
const inputElement = document.querySelector('input[type="text"]');
const buttonElement = document.querySelector('button');

// Add a click event listener to the button
buttonElement.addEventListener('click', function() {
  // Get the input value
  const tweetUrl = inputElement.value;

  // Make an API call to retrieve data using the tweet URL
  fetch('https://some-api.com/tweets', {
    method: 'POST',
    body: JSON.stringify({ url: tweetUrl }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    // Update the response text
    const responseElement = document.querySelector('.text p');
    responseElement.textContent = data.response;
  })
  .catch(error => console.error(error));
});
