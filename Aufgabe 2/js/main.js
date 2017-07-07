var slideIndex = 0;
    slider();
    function slider() {
        var i;
        var x = document.getElementsByClassName("part");
        for (i = 0; i < x.length; i++) {
            x[i].classList.remove("slide");
            x[i].classList.remove("slideOut");
            x[i].className += " slideOut";
        }
        slideIndex++;
        if (slideIndex > x.length) {
            slideIndex = 1
        }
        x[slideIndex - 1].classList.remove("slideOut");
        x[slideIndex - 1].style.display = "inline";
        x[slideIndex - 1].className += " slide";
        setTimeout(slider, 1500);
    }