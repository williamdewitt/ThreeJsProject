import * as THREE from 'three';
    import { createGround } from './world.js';

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(-aspect * 5, aspect * 5, 5, -5, 0.1, 1000);
    camera.position.set(10, 10, 10); // Position the camera for isometric view
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Ground
    const ground = createGround();
    scene.add(ground);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040); // soft white light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Animation
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.left = -aspect * 5;
      camera.right = aspect * 5;
      camera.top = 5;
      camera.bottom = -5;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
