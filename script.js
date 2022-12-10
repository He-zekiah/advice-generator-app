const dye = document.getElementById('dye');
const text = document.getElementById('text');
const num = document.getElementById('num');

async function getAdivice() {
    try {
        let res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        if (data) {
            text.innerText = data.slip.advice;
            num.innerText = data.slip.id;
        }
    } catch (error) {

    }
}

dye.addEventListener("click", function (e) {
    getAdivice();
    dye.classList.add('active');
});