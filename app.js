// Button close functionality
const btnDangerClose = document.querySelector(".btn-danger-close")
const btnSuccessClose = document.querySelector(".btn-success-close")

btnDangerClose.addEventListener('click', function() {
    this.parentElement.style.display = 'none';
})

btnSuccessClose.addEventListener('click', function() {

    this.parentElement.style.display = 'none';
})

// FAB Button functionality
var fabButton = document.querySelector(".fab-button")
var fabOptions = document.querySelector(".fab-options")
fabButton.addEventListener('click', ()=>{
    const styl = getComputedStyle(fabOptions)
    const visibility = styl.visibility;
    if(visibility == 'collapse'){

        fabOptions.style.visibility = 'visible'
    }
    else{

        fabOptions.style.visibility = 'collapse'
    }
})

// Card close functionality
var closeCard = document.querySelectorAll(".closeCard")

for (let i = 0; i < closeCard.length; i++) {
    
    closeCard[i].addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    })
}