THREE.Custom = THREE.Custom || {};

// Taken from https://github.com/stemkoski/stemkoski.github.com/blob/master/Three.js/js/shaders/AdditiveBlendShader.js
  THREE.Custom.AdditiveShader = {
      uniforms: {
          tBase: { type: "t", value: null },
          tAdd: { type: "t", value: null },
          fCoeff: { type: "f", value: 1.0 }
      },

      vertexShader: [
          "varying vec2 vUv;",

          "void main() {",
              "vUv = uv;",
              "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
          "}"
      ].join("\n"),

      fragmentShader: [
          "uniform sampler2D tBase;",
          "uniform sampler2D tAdd;",
          "uniform float fCoeff;",

          "varying vec2 vUv;",

          "void main() {",
              "vec4 texel = texture2D( tBase, vUv );",
              "vec4 add = texture2D( tAdd, vUv );",
              "gl_FragColor = texel + add;",
          "}"
      ].join("\n")
  };
