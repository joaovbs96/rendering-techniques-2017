// Window functions
function width(){

  var w = window.innerWidth || 1;
  return w;

}

function height(){

  var h = window.innerHeight || 1;
  return h;

}

function ratio(){

  var r = window.devicePixelRatio || 1;
  return r;

}

// Window Resize
function onWindowResize() {

  var w = width();
  var h = height();

  camera.aspect = w / h;
  camera.updateProjectionMatrix();

  renderer.setSize( w, h );

}
