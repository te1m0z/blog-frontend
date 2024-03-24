import * as THREE from 'three'

export function init(ref: HTMLElement) {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, ref.clientWidth / ref.clientHeight, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(ref.clientWidth, ref.clientHeight);

    ref.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    renderer.render(scene, camera);

    // Animation loop
    // function animate() {
    //     requestAnimationFrame(animate);

    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;

    //     renderer.render(scene, camera);
    // }

    // animate();
}