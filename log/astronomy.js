import * as THREE from "three";

export function generateSun() {
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    // const texture = new THREE.TextureLoader().load('textures/sun_texture.jpg');
    const material = new THREE.MeshBasicMaterial({color: 0xffffff,  transparent: true, opacity: 0.9 });
    const sun = new THREE.Mesh(geometry, material);
    sun.position.set(100, 100, -50);
    return sun;
}

export function generateMoon() {
    const geometry = new THREE.SphereGeometry(5, 32, 32);
    const material = new THREE.MeshBasicMaterial({color: 0x5998bc,  transparent: true, opacity: 0.9 });
    const moon = new THREE.Mesh(geometry, material);
    moon.position.set(-50, 50, -20);
    return moon;
}

export function generateStars() {
    let geometry = new THREE.BufferGeometry();
    let vertices = [];
    for (let i = 0; i < 1000; i++) {
        vertices.push(
        Math.random() * 500 - 100,
        Math.random() * 500 - 100,
        Math.random() * 500 - 100
        );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({ size: Math.random() * 0.5, color: 0xffffff, transparent: true, opacity: 0.7 });
    const stars = new THREE.Points(geometry, material);
    return stars;
}