
const text = 'Volverás... y esta vez lo entenderás todo.';
let index = 0;
function typeText() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 90);
    }
}
window.onload = typeText;
