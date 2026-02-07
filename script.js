const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "DIA ",
    "Just think about it!",
    "i am not afraid to break into your room",
    "just kidding...",
    "or am i ....",
    "JUST SAY YES HAYETE"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";

}
