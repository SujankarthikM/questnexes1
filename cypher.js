(function( $ ) {
	$.fn.makeLock = function(dialNum){
		console.clear()
		var combo
		var dials				 = dialNum || $(this).attr('data-dials') || 3
		var lock				 = $(this).addClass('myLock')
		var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


		lock.append('<div class="lockInset">'
			+'<div class="lockLine"></div>'
			+'<div class="lockWrapper"></div>'
			+'</div>')

		var enterBTN		= $('<div class="btnEnter button">Decoded ! </div>').appendTo(lock)
		var lockWrapper = lock.find('.lockWrapper')

		for(var i = 0; i< dials; i++){
			var dial = $( '<div class="dial"><ol></ol></div>').appendTo(lockWrapper)
			var slider = dial.find('ol')
			for(var n = 0; n < 26; n++){
				slider.append('<li>'+letters[n]+'</li>')
			}
			slider.prepend( slider.find('li:last-child') )
		}
		lockWrapper.append('<div class="shadow"></div>')

		var dialMove		= function(e){
			$(this).append( $('li:first-child', this))
			TweenLite.fromTo(this, 0.35, {top:0}, {top:-50,ease: Power2.easeOut})
		}
		lock.find('ol').on('click', dialMove)

		var checkLock		 = function(e){
			combo = ''
			lock.find('li:nth-child(2)').each( function(){
				combo += $(this).text()
                
			})
			console.log(combo)
			if(combo=='PEQWS'){
				console.log("got it")
				window.location.href = 'hanoi.html';

			}

		}
		enterBTN.on('click', checkLock)
	}
}( jQuery ));

$("#lock").makeLock()
