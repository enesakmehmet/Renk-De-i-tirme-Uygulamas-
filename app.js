// Renk değiştirme fonksiyonu
function changeColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'black', 'silver', 'orange', 'pink', 'cyan'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

// Butona tıklama olayını dinleyen kod
document.getElementById('change-color-btn').addEventListener('click', changeColor);
