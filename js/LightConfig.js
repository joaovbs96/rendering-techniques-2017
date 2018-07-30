// Configure Scene lights
function lightSetup(){

  // adding ambient light
  var ambient = new THREE.AmbientLight( 0xffffff, 0.2 );
  scene.add( ambient );

  var hemis = new THREE.HemisphereLight( 0xa7c8f9, 0xffffff, 1.0 );
  uniforms.topColor.value.copy( hemis.color );
  scene.add( hemis );

  // adding spotlight
  spot1 = new THREE.SpotLight( 0xffffff );
  spot1.position.set( -1500, 5000, 250 );
  spot1.target.position.set( 905,-97, -306 );
  spot1.castShadow = true;
  spot1.decay = 2;
  spot1.penumbra = 0.2;
  spot1.intensity = 1.5;

  spot1.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 1200, 5000 ) );
  spot1.shadow.bias = 0.0020;
  spot1.shadow.mapSize.width = 4096;
  spot1.shadow.mapSize.height = 4096;
  spot1.shadow.camera.near = 2000;
  spot1.shadow.camera.far = 58000;

  scene.add( spot1 );

  // adding directional light
  spot2 = new THREE.SpotLight( 0xffffff );
  spot2.position.set( 283, 2431, -485 );
  spot2.target.position.set( -1103, -68, 171 );
  spot2.castShadow = true;
  spot2.decay = 2;
  spot2.penumbra = 0.2;
  spot2.intensity = 1.5;

  spot2.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 95, 1, 0, 5000 ) );
  spot2.shadow.bias = 0.0020;
  spot2.shadow.mapSize.width = 4096;
  spot2.shadow.mapSize.height = 4096;
  spot2.shadow.camera.near = 200;
  spot2.shadow.camera.far = 5800;

  scene.add( spot2 );

}
