//your JS code here. If required.
const colorBoard = document.getElementById('color-board');

// Create 800 boxes
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Event listener for hover
    square.addEventListener('mouseenter', () => {
        square.style.backgroundColor = getRandomColor();
        setTimeout(() => {
            square.style.backgroundColor = 'lightgray'; // Reset color after 1 second
        }, 1000);
    });

    colorBoard.appendChild(square);
}

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}