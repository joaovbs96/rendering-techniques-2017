// Configure stat monitors
function stats(){

  // Create div to add monitors
  statsDiv = document.createElement( 'div' );
  statsDiv.id = "statID";

  // 0: fps
  statsFPS = new Stats();
  statsFPS.showPanel( 0 );
  statsDiv.appendChild( statsFPS.dom );

  // 1: ms
  statsMS = new Stats();
  statsMS.showPanel( 1 );
  statsMS.dom.style.marginLeft="90px";
  statsDiv.appendChild( statsMS.dom );

  // 2: mb
  statsMB = new Stats();
  statsMB.showPanel( 2 );
  statsMB.dom.style.marginLeft="180px";
  statsDiv.appendChild( statsMB.dom );
  container.appendChild( statsDiv );

}
