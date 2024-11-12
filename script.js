const cursor = document.getElementById('custom-cursor');
let currentCursor = 1;

function changeCursor() {
  cursor.classList.remove(`cursor${currentCursor}`);
  currentCursor = (currentCursor % 3) + 1;
  cursor.classList.add(`cursor${currentCursor}`);
}

document.addEventListener('mousemove', (event) => {
  cursor.style.left = `${event.clientX - 25}px`;
  cursor.style.top = `${event.clientY - 25}px`;
  cursor.style.opacity = '1';
});

document.addEventListener('mouseout', () => {
  cursor.style.opacity = '0';
});

setInterval(changeCursor, 1000);