const material = new THREE.MeshLambertMaterial(
    {color: 0x005fdb}
);

const cube = new THREE.Mesh(
    // x, y, z
    new THREE.BoxBufferGeometry(
        1, 1, 1
    ),
    material
);
scene.add(cube);

const circle = new THREE.Mesh(
    // radius segments
    new THREE.CircleBufferGeometry(
        0.5, 20
    ),
    material
);
circle.position.x = 2;
circle.rotation.x = THREE.MathUtils.degToRad(-90);
scene.add(circle);

const cone = new THREE.Mesh(
    // radius height radialSegments heightSegments
    new THREE.ConeBufferGeometry(
        0.3, 0.5
    ),
    material
);
cone.position.x = -2;
cone.position.y = 2;
scene.add(cone);

x3.add(cone, { label: 'Cone'});

x3.add(circle, { label: 'Circle'});

x3.add(cube, { label: 'Cube' });



renderer.setAnimationLoop(() => {
    x3.tick();

    x3.fps(() => {
        renderer.render(scene, camera);
    });
});

