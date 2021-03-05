let gameOver = false;
let player,cursors

let config = {
  type: Phaser.AUTO,
  width: 160,
  height: 144,
  parent: 'game',
  backgroundColor: '#696969',
  zoom: document.getElementById("escala").value,
  pixelArt: true,
  scene: [Escena],
	debug: false,
	physics: {
    default: 'arcade',
    arcade: {
        debug: false
    }
	}
};

let game = new Phaser.Game(config);
console.log(game)
//let e = new Escena()
