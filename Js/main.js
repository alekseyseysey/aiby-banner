

const firstButton = document.getElementById("buttonFirstContainer")
const secondButton = document.getElementById("buttonSecondContainer")
const bestOffer = document.querySelector(".buttonFirstBestOffer")

firstButton.classList.add('active')
bestOffer.classList.add('activeBestOffer')

firstButton.addEventListener("click", (e) => {
    if(firstButton.classList.contains('active')) {
        console.log(firstButton)

    } else {
        secondButton.classList.remove('active')
        firstButton.classList.add("active");
        bestOffer.classList.add('activeBestOffer');
    }
})

secondButton.addEventListener("click", (e) => {
    if(secondButton.classList.contains('active')) {

    } else {
        firstButton.classList.remove('active')
        bestOffer.classList.remove('activeBestOffer');
        secondButton.classList.add("active");
    }
})




