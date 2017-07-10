var slideIndex = 0;
    setTimeout(slider, 3000);

    	var move_left = 0;

	function setMoveLeft(){
		if (move_left != (document.getElementsByClassName("part")[0].offsetWidth + 4)) {
			move_left = document.getElementsByClassName("part")[0].offsetWidth + 4;
		}
	}
	setMoveLeft();

	window.onresize = function(event) {
		setMoveLeft();
	};


    
    function slider() {
        var i;
        var x = document.getElementsByClassName("part");
        for (i = 0; i < x.length; i++) {
        }
        slideIndex++;
        
	if (slideIndex >= x.length) {
            slideIndex = 0
        }
	document.getElementsByClassName("content-handler")[0].style.marginLeft = (-move_left*slideIndex)+"px"
	    
        setTimeout(slider, 3000);
}

