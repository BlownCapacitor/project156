AFRAME.registerComponent("fish", {
  init: function () {
    for (var i = 1; i <= 20; i++) {

      var id = `hurdle${i}`;

     var posX = Math.random() * 3000 + -1000;
      var posY = Math.random() *  + -1;
      var posZ = Math.random() * 3000 + -1000;

      var position = { x: posX, y: posY, z: posZ };

      this.fishes(id, position);
    }
  },
  fishes: (id, position) => {
    var terrainEl = document.querySelector("#terrain");

    var fishEL = document.createElement("a-entity");

    fishEL.setAttribute("id", id);

    fishEL.setAttribute("position", position);
    fishEL.setAttribute("rotation", {x: 0, y:90, z:0});
    fishEL.setAttribute("scale", { x: 5, y: 5, z: 5 });

    fishEL.setAttribute("gltf-model", "./assets/models/fish/scene.gltf");

    fishEL.setAttribute("animation-mixer", {});

    fishEL.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 3.2,
    });

    fishEL.setAttribute("game-play", {
      elementId: `#${id}`,
    });

    terrainEl.appendChild(fishEL);
  },
});
