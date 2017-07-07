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


function getLeft() {
  var left = document.getElementsByClassName('part').style.left;
  return Number(left.substr(0, left.length - 2));   // .substr removes the 'px'
}
// Move thumbs to the left
function left() {
  var currentLeft = getLeft();
  var newLeft = currentLeft -500;
  document.getElementsByClassName('part').style.left = newLeft + 'px';
}

// Move thumbs to the right
function right() {
  var currentLeft = getLeft();
  var newLeft = currentLeft +500;
  document.getElementsByClassName('part').style.left = newLeft + 'px';
}