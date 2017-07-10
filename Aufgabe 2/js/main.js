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


	window.addEventListener('load', function(){
		var allimages= document.getElementsByTagName('img');
		for (var i=0; i<allimages.length; i++) {
			if (allimages[i].getAttribute('data-src')) {
				allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
			}
		}
	}, false)

    
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

