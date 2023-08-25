const starsE1 = document.querySelectorAll(".fa-star");
const emojiEl = document.querySelectorAll(".fa-regular");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updaterating(0);
// forEach -> Method
starsE1.forEach((starsE1, index) => {
    starsE1.addEventListener("click", () => {
        updaterating(index);
    });
});

function updaterating(index){
    starsE1.forEach((starsE1, idx) => {
        if(idx < index + 1){
            starsE1.classList.add("active");
        }else{
            starsE1.classList.remove("active");
        }
    });

    emojiEl.forEach((emojiEl) => {
        emojiEl.style.transform = 'translateX(-' + index * 50 +'px)';
        emojiEl.style.color = colorsArray[index]
    });
}