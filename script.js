// =========================
// DODATKOWE ZDJĘCIA
// =========================

function showPhotos(id) {
    const photos = document.getElementById(id);

    if (photos.style.display === "grid") {
        photos.style.display = "none";
    } else {
        photos.style.display = "grid";
    }
}

// =========================
// SECRET
// =========================

const secretButton = document.getElementById("secretButton");

if (secretButton) {
    secretButton.addEventListener("click", function () {

        const secretText = document.getElementById("secretText");

        if (secretText.style.display === "block") {

            secretText.style.display = "none";
            secretButton.innerHTML = "💜 Otwórz wiadomość 💌";

        } else {

            secretText.style.display = "block";
            secretButton.innerHTML = "🔓 Zamknąć";

        }

    });
}

// =========================
// WUBBA LUBBA DUB-DUB
// =========================

function sayRick() {

    const text = new SpeechSynthesisUtterance("Wubba lubba dub dub");

    text.lang = "en-US";
    text.rate = 1;
    text.pitch = 0.8;
    text.volume = 1;

    speechSynthesis.cancel();
    speechSynthesis.speak(text);

}

// =========================
// HASŁO
// =========================

const correctPassword = "31200821";

function checkPassword() {

    const input = document.getElementById("passwordInput");
    const screen = document.getElementById("passwordScreen");
    const wrong = document.getElementById("wrongPassword");

    if (input.value === correctPassword) {

        screen.classList.add("hide");

        document.body.classList.remove("siteLocked");

        setTimeout(() => {
            screen.remove();
        }, 900);

    } else {

        wrong.style.display = "block";
        input.value = "";
        input.focus();

    }

}

// ENTER = wejście
document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        checkPassword();
    }

});