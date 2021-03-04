var gameOver = false;
class Escena extends Phaser.Scene{
	constructor(){
		super()
	}
	preload(){
		this.load.image('ball','../images/ball.png')
		this.load.image('bg','../images/bg.png')
		this.load.image('player','../images/pk1.png')
	}
	create(){
		this.add.image(160/2,144/2,'bg')
		this.add.image(160/2,144/2,'ball')
		this.add.image(160/4,144/4,'player')
		cursors = this.input.keyboard.createCursorKeys();
	}
	update(){
		if(gameOver){
			return;
		}
	}
}
const e = new Escena()

const config = {
        type: Phaser.AUTO,
        width: 160,
        height: 144,
        parent: 'game', 
        backgroundColor: '#696969',
        zoom: 1,
        pixelArt: true,    
        scene: [e],
	debug: false
};

const game = new Phaser.Game(config);
