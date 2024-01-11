function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/close/menu.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/close/close.svg"
    }
}

function myFunction(x) {
    var tooltipText = x.getElementsByClassName("tooltiptext")[0];
    if (tooltipText.style.visibility === "hidden") {
      tooltipText.style.visibility = "visible";
      tooltipText.style.opacity = 1;
      setTimeout(function() {
        tooltipText.style.visibility = "hidden";
        tooltipText.style.opacity = 0;
      }, 5000); 
    } else {
      tooltipText.style.visibility = "hidden";
      tooltipText.style.opacity = 0;
    }
  }