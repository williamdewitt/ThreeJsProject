import * as THREE from 'three';

    export function createGround() {
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load('./cobblestone.png');
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(4, 4); // Adjust the repeat values as needed

      const geometry = new THREE.PlaneGeometry(10, 10);
      const material = new THREE.MeshLambertMaterial({ map: texture });
      const plane = new THREE.Mesh(geometry, material);
      plane.rotation.x = -Math.PI / 2; // Rotate the plane to be horizontal
      plane.position.y = -1; // Position the plane below the cube
      return plane;
    }
