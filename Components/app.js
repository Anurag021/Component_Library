// const alertBtnClose = document.querySelector(".alert-close")


// alertBtnClose.addEventListener('click', function() {

//     console.log("clicked btn");
//     this.parentElement.style.display = 'none';
// })

// ------FAB Button-----
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