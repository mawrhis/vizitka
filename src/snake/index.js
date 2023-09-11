class Game {
  pixelSize = 10;
constructor(arenaElement) {
  this.arenaElement = arenaElement;
  this.arenaSize = this.defineArenaSize();
  
}

defineArenaSize = () => {
  const originalWidth = this.arenaElement.offsetWidth;
  const originalHeight = this.arenaElement.offsetHeight;
  
  const width = originalWidth/this.pixelSize;
  const height = originalHeight/this.pixelSize;
  
  console.log('1', width, height);
  return {width, height};
  
}

}

const arenaElement = document.querySelector("#arena");
new Game(arenaElement);



// sizes
// * pixel size
// arena
// * 
// keyboard controls
// snake
// * snake movement
// * snake growth
// * snake death
// food
// * spawn food
