$( document ).keydown( function( event ) {
  switch(event.key){
    case 'p':
    case 'P':
    $( '#info' ).toggle( !toShow );
    $( '#statID' ).toggle( !toShow );
    toShow = !toShow;
    break;

    case 'a':
    case 'A':
    camera.position.x += 10;
    break;

    case 'w':
    case 'W':
    camera.position.y += 10;
    break;

    case 's':
    case 'S':
    camera.position.y += -10;
    break;

    case 'd':
    case 'D':
    camera.position.x += -10;
    break;

    case 'j':
    case 'J':
    camera.translateZ(10);
    break;

    case 'm':
    case 'M':
    camera.translateZ(-10);
    break;

  }
});
