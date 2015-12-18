(function($) { 
	// When to show the scroll link
	// higher number = scroll link appears further down the page   
	var upperLimit = 1000;
	
	// Our scroll link element
	var scrollElemBottom = $('#tobottom');
   
	// Scroll to top speed
	var scrollSpeed = 500;
   
	// Show and hide the scroll to top link based on scroll position   
	//scrollElemBottom.hide();
	$(window).scroll(function () {            
		var scrollTop = $(document).scrollTop();       
		if ( scrollTop < upperLimit ) {
			$(scrollElemBottom).stop().fadeTo(300, 1); // fade back in           
		}else{       
			$(scrollElemBottom).stop().fadeTo(300, 0); // fade out
		}
	});
	// Scroll to top animation on click
	$(scrollElemBottom).click(function(){
		console.log(document.body.clientHeight);
		scrollElemBottom.hide();
		$('html, body').animate({scrollTop:document.body.clientHeight||10000}, scrollSpeed);
		return false;
	});

	//借用位置添加分享图标
	//alert(3)
	//var img = new Image();
	//img.src = "http://vimer.me/favicon_share.png";
	//img.style.position = 'absolute';
	//img.style.left = '-1000px';
	//img.style.top = '-1000px';
	//img.style.display="none";
	//document.body.insertBefore(img, document.body.firstChild);

})(jQuery);
