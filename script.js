window.onload = () => {
    let testEntityAdded = false;

    const el = document.querySelector("[gps-new-camera]");

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);
            // Add a box to the north of the initial GPS position
            const entity = document.createElement('a-entity');
            entity.setAttribute('gltf-model', '#object');
            entity.setAttribute('scale', '70 70 70');
            entity.setAttribute('rotation', '0 90 0');
            entity.setAttribute('position', '5 -5 -4');
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.005,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);

            const testText = document.createElement('a-text');
            testText.setAttribute('value', 'test1');
            testText.setAttribute('look-at', '[gps-new-camera]');
            testText.setAttribute('align', 'center');
            document.querySelector("a-scene").appendChild(testText);
        }
        testEntityAdded = true;
    });
};
