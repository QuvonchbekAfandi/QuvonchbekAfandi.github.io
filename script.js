// URL dan matnni olish
const urlParams = new URLSearchParams(window.location.search);
const text = urlParams.get('text');

// Ekranga chiqarish
const displayTextElement = document.getElementById('display-text');
if (text) {
    displayTextElement.textContent = text;
} else {
    displayTextElement.textContent = 'Matn topilmadi.';
}
