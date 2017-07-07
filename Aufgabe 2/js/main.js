var slideIndex = 0;
slider();

function slider() {
    var i;
    var x = document.getElementsByClassName("part");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "inline"; 
    setTimeout(slider, 3000);
}