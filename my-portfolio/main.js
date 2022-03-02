// Import the entire three.js core library.
// Option 2: Import just the parts you need
// import { Scene } from 'three';
import * as THREE from 'three';
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
console.log(scene);
console.log(camera);
console.log(renderer);