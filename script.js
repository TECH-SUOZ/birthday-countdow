document.addEventListener("DOMContentLoaded", function () {
    const countdownDate = new Date(new Date().getFullYear(), 10, 1, 0, 0, 0).getTime();

    const dayElem = document.getElementById("day");
    const hourElem = document.getElementById("hour");
    const minuteElem = document.getElementById("minutes");
    const secondElem = document.getElementById("seconds");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            showCongratulationsPopup();
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        dayElem.textContent = days < 10 ? "0" + days : days;
        hourElem.textContent = hours < 10 ? "0" + hours : hours;
        minuteElem.textContent = minutes < 10 ? "0" + minutes : minutes;
        secondElem.textContent = seconds < 10 ? "0" + seconds : seconds;
    }

    function showCongratulationsPopup() {
        const popupContainer = document.getElementById("popup-container");
        popupContainer.style.display = "flex";

        document.querySelector(".clock").style.display = "none";

        createBalloons();
        createGiftBoxes();

        document.getElementById("closePopup").addEventListener("click", function() {
            popupContainer.style.display = "none";
        });
    }

    function createBalloons() {
        const balloonContainer = document.querySelector(".balloons-container");

        setInterval(() => {
            const balloon = document.createElement("div");
            balloon.classList.add("balloon");

            const colors = ["#ff6b6b", "#ffdd59", "#54a0ff", "#1dd1a1", "#f368e0", "#ee5253"];
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.left = Math.random() * 90 + "vw";
            balloon.style.animationDuration = Math.random() * 3 + 6 + "s";

            const rope = document.createElement("div");
            rope.classList.add("zigzag-rope");
            balloon.appendChild(rope);
            balloonContainer.appendChild(balloon);

            setTimeout(() => {
                balloon.remove();
            }, 10000);
        }, 400);
    }

    function createGiftBoxes() {
        const popupContainer = document.getElementById("popup-container");

        setInterval(() => {
            const giftBox = document.createElement("div");
            giftBox.classList.add("gift-box");

            const colors = ["#f368e0", "#ee5253", "#0abde3", "#10ac84", "#ff9ff3", "#ff6b81"];
            giftBox.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            giftBox.style.left = Math.random() * 90 + "vw";
            giftBox.style.animationDuration = Math.random() * 2 + 5 + "s";

            popupContainer.appendChild(giftBox);

            setTimeout(() => {
                giftBox.remove();
            }, 8000);
        }, 600);
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});
