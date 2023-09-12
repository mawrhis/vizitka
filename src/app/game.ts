import styles from './game.module.css';

export class Game {
  pixelSize = 10;
  arenaElement: HTMLElement;
  arenaSize: { width: number; height: number; };
  snakeElement: HTMLDivElement;
  snakeHeadPosition: { x: number; y: number; };
  snakeBody: { x: number; y: number; }[];
  snakeDirection: string;
  snakeLength: number;

  constructor(arenaElement: HTMLElement) {
    this.arenaElement = arenaElement;
    this.arenaSize = this.defineArenaSize();
    window.addEventListener('keydown', this.handleKeyPress);
    this.snakeElement = this.renderSnake()
    this.snakeHeadPosition = {x: 0, y: 0};
    this.snakeDirection = 'right';
    this.snakeLength = 2;
    this.snakeBody = [this.snakeHeadPosition] 
  }

  defineArenaSize = () => {
    const originalWidth = this.arenaElement.offsetWidth;
    const originalHeight = this.arenaElement.offsetHeight;
    
    const width = originalWidth/this.pixelSize;
    const height = originalHeight/this.pixelSize;
    
    console.log('1', width, height);
    return {width, height};
  }

  renderSnake = () => {
    // const snakeCell
    const snakeElement = document.createElement('div');
    snakeElement.classList.add(styles.snake);
    snakeElement.style.width = `${this.pixelSize}px`;
    snakeElement.style.height = `${this.pixelSize}px`;
    snakeElement.style.top = `${this.arenaSize.height*this.pixelSize/2}px`;
    snakeElement.style.left = `${this.arenaSize.width*this.pixelSize/2}px`;
    this.arenaElement.appendChild(snakeElement);
    // this.positionSnake();
    this.animateSnake();
    return snakeElement;
  }

  positionSnake = () => {
  }

  moveSnake = (direction: string) => {
    switch (direction) {
      case 'up':
        this.snakeHeadPosition.y--;
        break;
      case 'down':
        this.snakeHeadPosition.y++;
        break;
      case 'left':
        this.snakeHeadPosition.x--;
        break;
      case 'right':
        this.snakeHeadPosition.x++;
        break;
      default:
        break;
    }
    // pokud had vyjede z hraci plochy, tak se objevi na druhe strane
    if (this.snakeHeadPosition.x >= this.arenaSize.width) {
      this.snakeHeadPosition.x = 0;
    }
    if (this.snakeHeadPosition.x < 0) {
      this.snakeHeadPosition.x = this.arenaSize.width-1;
    }
    if (this.snakeHeadPosition.y >= this.arenaSize.height) {
      this.snakeHeadPosition.y = 0;
    }
    if (this.snakeHeadPosition.y < 0) {
      this.snakeHeadPosition.y = this.arenaSize.height-1;
    }
    this.snakeElement.style.top = `${this.snakeHeadPosition.y*this.pixelSize}px`;
    this.snakeElement.style.left = `${this.snakeHeadPosition.x*this.pixelSize}px`;
  }

  animateSnake = () => {
    const snakeSpeedInMs = 1000;
    const snakeMovementTimer = setInterval(() => {
      this.moveSnake(this.snakeDirection);
    }
    , snakeSpeedInMs);
  }


  handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;
        // Check which key was pressed
        switch (event.key) {
          case 'ArrowUp':
            console.log('up');
            this.snakeDirection = 'up';
            // Handle the up arrow key press
            break;
          case 'ArrowDown':
            console.log('down');
            this.snakeDirection = 'down';
            // Handle the down arrow key press
            break;
          case 'ArrowLeft':
            console.log('left');
            this.snakeDirection = 'left';
            // Handle the left arrow key press
            break;
          case 'ArrowRight':
            console.log('right');
            this.snakeDirection = 'right';
            // Handle the right arrow key press
            break;
          default:
            // Handle other key presses, if needed
            break;
        }
    }

  goInDirection = (direction: string) => {
  }
}




// snake size 1 px goes around and is manipulated by wsad keys

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
