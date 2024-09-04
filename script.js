// script.js
function calculateArea() {
    // Get the length and width values from the input fields
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);

    // Check if both values are valid numbers
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert('Please enter valid positive numbers for length and width.');
        return;
    }

    // Calculate the area
    const area = length * width;

    // Display the result
    document.getElementById('result').textContent = `The area of the rectangle is: ${area}`;
}
