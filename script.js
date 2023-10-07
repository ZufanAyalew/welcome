// Get elements from the DOM
const input = document.getElementById('input');
const submitButton = document.getElementById('submit');
const output = document.getElementById('output');

// Add event listener to the submit button
submitButton.addEventListener('click', () => {
    const name = input.value;
    output.textContent = `Hello, ${name}!`;
});
