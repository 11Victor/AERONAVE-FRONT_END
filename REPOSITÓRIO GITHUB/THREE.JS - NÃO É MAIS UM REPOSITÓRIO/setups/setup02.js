const options = {
    targetSelector: '#scene',
    width: 800, height: 600,
    backgroundColor: 0x000000
}

const renderer = new THREE.WebGLRenderer(
    { antialias: true }
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

renderer.setSize(
    options.width, options.height
);

document.querySelector(
    options.targetSelector)
    .appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.Color(
    options.backgroundColor
);


const camera = new THREE.PerspectiveCamera(
    50, options.width / options.height
);

camera.position.x = 9.55;
camera.position.y = 6.67;
camera.position.z = 7.95;

const light = new THREE.HemisphereLight(
    0xFFFFFF, 0X080820,1
);

scene.add(light);

const x3 = new THREEx3(
    {
        THREE,
        OrbitControls: THREE.OrbitControls,
        camera,
        renderer,
        scene
    }
);

x3.add(camera, { open: false});
x3.add(light, { helper: {visible: false}});
