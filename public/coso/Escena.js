class Escena extends Phaser.Scene{
	constructor(){
		super()
		this.player = {}
	}

	preload(){
		this.load.image('ball','../images/ball.png')
		this.load.image('bg','../images/bg.png')
		this.load.image('player','../images/pk1.png')
	}

	create(){
		this.add.image(160/2,144/2,'bg')
		this.balls()
		this.velocity = 1
    //rango: x8,y22 a x152,y136
		this.player = this.add.sprite(80, 72, 'player')
		//console.log(player)
		//lo que esta escrito mas abajo es lo que se muestra mas arriba
		cursors = this.input.keyboard.createCursorKeys()
	}

	update(){
		if(gameOver){
			return;
		}

		if (cursors.left.isDown){
			this.player.x-=this.velocity
		}else if (cursors.right.isDown){
			this.player.x+=this.velocity
		}else if (cursors.up.isDown){
			this.player.y-=this.velocity
		}else if (cursors.down.isDown){
			this.player.y+=this.velocity
		}
	}

	random(min, max) { // min and max included
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	balls(){
		//rango: x6,y20 a x154,y138
		this.add.image(this.random(6,154),this.random(20,138),'ball')
		//this.add.image(6,20,'ball')
		//this.add.image(154,138,'ball')
		//this.add.image(154,20,'ball')
		//this.add.image(6,138,'ball')
	}
}
