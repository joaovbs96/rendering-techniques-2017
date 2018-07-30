// Setting up file names and file paths
function filesetup( sceneNumber ){

  switch ( sceneNumber ) {
    case 0: // CornellBox-glossy
    filepath = '../assets/cornellbox/';
    filename = 'CornellBox-Glossy';
    break;

    case 1: // conference
    filepath = '../assets/conference/';
    filename = 'conference';
    break;

    case 2: // bain
    filepath = '../assets/bain/';
    filename = 'salle_de_bain';
    break;

    case 3: // sibenik
    filepath = '../assets/sibenik/';
    filename = 'sibenik';
    break;

    case 4: // breakfast
    filepath = '../assets/breakfast/';
    filename = 'breakfast_room';
    break;

    case 5: // gallery
    filepath = '../assets/gallery/';
    filename = 'gallery';
    break;

    case 6: // sponza
    filepath = '../assets/sponza/';
    filename = 'sponza';
    break;
  }

}

// Load models of a given sceneNumber
function loadmodels( sceneNumber, light ){

  // sky/background
  var skyGeo = new THREE.SphereBufferGeometry( 4000, 32, 15 );
  var skyMat = new THREE.ShaderMaterial( { vertexShader: vertexShader, fragmentShader: fragmentShader, uniforms: uniforms, side: THREE.BackSide } );
  var sky = new THREE.Mesh( skyGeo, skyMat );
  scene.add( sky );

  filesetup( sceneNumber );

  var waterGeometry = new THREE.PlaneBufferGeometry( 10000, 10000 );
  water = new THREE.Water(
    waterGeometry,
    {
      textureWidth: 512,
      textureHeight: 512,
      waterNormals: new THREE.TextureLoader().load( '../assets/water/waternormals.jpg', function ( texture ) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      }),
      alpha: 1.0,
      sunDirection: light.position.clone().normalize(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale:  3.7,
      fog: scene.fog !== undefined
    }
  );
  water.rotation.x = - Math.PI / 2;
  water.position.y = -90;
  scene.add( water );

  // logs progress into console
  var onProgress = function ( xhr ) {

    if ( xhr.lengthComputable ) {
      var percentComplete = xhr.loaded / xhr.total * 100;
      console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }

  };

  // logs message on error
  var onError = function ( xhr ) {
    console.log( 'An error occured while loading the OBJ file.' );
  };

  // loader main scene model
  // MTL material loader
  var mtlLoader = new THREE.MTLLoader();
  mtlLoader.setPath( filepath );
  mtlLoader.load( filename + '.mtl', function( materials ) {

    materials.preload();

    // OBJ loader
    var objLoader = new THREE.OBJLoader();
    objLoader.setMaterials( materials );
    objLoader.setPath( filepath );
    objLoader.load( filename + '.obj', function ( object ) {

      object.name = "model";
      object.position.y = - 95;
      object.traverse( function( node ) {

        if ( node instanceof THREE.Mesh ) {
          node.receiveShadow = true;
          node.castShadow = true;
          node.flatShading = true;
          node.shininess = 100;
          node.reflectivity = 2;
          node.morphTargets = true;
          node.vertexColors = THREE.FaceColors;
          node.specular = 0xffffff;
        }

      } );

      scene.add( object );

    }, onProgress, onError );

  });

  // Material PBR
  var physicMat = new THREE.MeshPhysicalMaterial( {
    map: null,
    metalness: 0.2,
    reflectivity: 1,
    roughness: 0.3,
    opacity: 1,
    side: THREE.FrontSide,
    envMapIntensity: 5,
    premultipliedAlpha: true
  } );

  var metalPath = '../assets/';
  var textureLoader = new THREE.TextureLoader();
  textureLoader.setPath(metalPath);

  physicMat.aoMap = textureLoader.load('thinmetal/AO.png');
  physicMat.normalMap = textureLoader.load('thinmetal/Normal.png');
  physicMat.roughnessMap = textureLoader.load('thinmetal/Roughness.png');
  physicMat.map = textureLoader.load('thinmetal/Color.png');
  physicMat.metalnessMap = textureLoader.load('thinmetal/Metallic.png');
  physicMat.displacementMap = textureLoader.load('thinmetal/Height.png');
  physicMat.envMap = cubeCamera.renderTarget.texture;

  // pbr box mesh
  sphereGeo = new THREE.SphereBufferGeometry( 45, 45, 45 );
  sphere = new THREE.Mesh( sphereGeo, physicMat );
  sphere.position.set( 0, -25, 0 );
  sphere.castShadow = true;
  scene.add( sphere );

  var woodPath = '../assets/bark/';
  var textureLoader = new THREE.TextureLoader();
  textureLoader.setPath(woodPath);

  woodMaterial = new THREE.MeshStandardMaterial( );
  woodMaterial.aoMap = textureLoader.load('AO.png');
  woodMaterial.normalMap = textureLoader.load('Normal.png');
  woodMaterial.roughnessMap = textureLoader.load('Roughness.png');
  woodMaterial.map = textureLoader.load('Color.png');

  // MTL material loader
  var loader = new THREE.OBJLoader();
  loader.load( '../assets/tree.obj', function ( object ) {

    object.position.set( 0, -90, 0 );
    object.scale.multiplyScalar( 400 );
    object.traverse( function( node ) {

      if ( node instanceof THREE.Mesh ) {
        node.material = woodMaterial;
        node.receiveShadow = true;
        node.castShadow = true;
        node.flatShading = true;
        node.metalness = 0;
        node.roughness = 1;
        node.morphTargets = true;
        node.vertexColors = THREE.FaceColors;
        node.specular = 0xffffff;
      }

    } );

    tree = object;
    scene.add( object );

  } );

}
