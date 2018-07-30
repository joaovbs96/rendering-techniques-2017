// Setting up camera position for a given sceneNumber
function cameraSetup( sceneNumber ){

  switch ( sceneNumber ) {
    case 0: // CornellBox-glossy
    camera.position.x = 3.5330874295061965;
    camera.position.y = -93.15695601511106;
    camera.position.z = -0.6224085579463883;
    break;

    case 1: // conference
    camera.position.x = 2224.0145488060543;
    camera.position.y = 498.9288807401126;
    camera.position.z = 23.033498295266956;
    break;

    case 2: // bain
    camera.position.x = 0.04234597428018775;
    camera.position.y = -68.30813984470136;
    camera.position.z = 128.58872180666788;
    break;

    case 3: // sibenik
    camera.position.x = 19.495810050439175;
    camera.position.y = -97.05156638002913;
    camera.position.z = 0.916880481772738;
    break;

    case 4: // breakfast
    camera.position.x = 10.05932323708601;
    camera.position.y = -87.14301426149541;
    camera.position.z = 1.9613416281645955;
    break;

    case 5: // gallery
    camera.position.x = 12.907023698202241;
    camera.position.y = -92.15221376638011;
    camera.position.z = -0.3921349441040083;
    break;

    case 6: // sponza
    camera.position.x = -1303.7648835491;
    camera.position.y = 4.250937254369146;
    camera.position.z = 72.03666699791765;
    break;
  }

}
