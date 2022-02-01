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