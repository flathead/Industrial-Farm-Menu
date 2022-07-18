jQuery( function( $ ) {
	$( '.farm-item' ).on( 'mouseenter', function() {
		$( '.clouds' ).fadeOut(300);
	} );
	$( '.farm-container' ).on( 'mouseleave', function() {
			console.log('Farm zone cursor leave...');
			setTimeout( function() {
				$( '.clouds' ).fadeIn(1000);
			}, 1000);
	} );
} );