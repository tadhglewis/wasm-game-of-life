import { Universe } from "wasm-game-of-life";

const map = document.querySelector("#game-of-life-canvas");

const universe = Universe.new();

const renderLoop = () => {
  map.textContent = universe.render();
  universe.tick();

  requestAnimationFrame(renderLoop);
};

requestAnimationFrame(renderLoop);
