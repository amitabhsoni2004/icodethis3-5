let buyBtn = document.querySelector(".buyBtn");
let loginmess = document.querySelector(".loginmess");
let greenTimer = document.querySelector(".greenTimer");
let messageP = document.querySelector(".message p");
buyBtn.addEventListener("click", () => {
    if (buyBtn.textContent === 'BUY') {
        loginmess.style.display = "flex";
        buyBtn.textContent = 'CANCEL';
        messageP.textContent = 'Order placed successfully';
    }
    else{

        loginmess.style.display = "flex";
        buyBtn.textContent = 'BUY';
        messageP.textContent = 'Order canceled successfully';
    }
})

greenTimer.addEventListener("animationend", () => {
    loginmess.style.display = "none";
});
