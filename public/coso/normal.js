const config = {
  type: Phaser.AUTO,
  width: 160,
  height: 144,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: {y: 0},
      debug: false
    }
  },
  scene: {
    preload,
    create,
    update
  },
  zoom: 5
}

let player, ball, cursors, score = 0, gameOver = false,
game = new Phaser.Game(config), scoreText

function preload(){
  this.load.image('ball','../images/ball.png')
  this.load.image('bg','../images/bg.png')
  this.load.image('player','../images/pk1.png')
  this.load.spritesheet('dude', '../images/pk.png',
  {frameWidth: 16, frameHeight: 16})
}

function create(){
  this.add.image(160/2,144/2,'bg')
  ball = this.physics.add.sprite(random(6,154),random(20,138),'ball')
  this.velocity = 1
  player = this.physics.add.sprite(80, 72, 'player')
  player.setCollideWorldBounds(true)
  //0stop,1down-right,2down-left,3down-up,
  //4up-left,5up,6up-up,7up-right,8left-up,
  //9left,10right-up,11right
  this.anims.create({
    key: 'left',
    frames: this.anims.generateFrameNumbers('dude',{start:8,end:9}),
    frameRate: 10,
    repeat: -1
  })
  this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dude',{start:10,end:11}),
    frameRate: 10,
    repeat: -1
  })
  this.anims.create({
    key: 'up',
    frames: this.anims.generateFrameNumbers('dude',{start:4,end:7}),
    frameRate: 10,
    repeat: -1
  })
  this.anims.create({
    key: 'down',
    frames: this.anims.generateFrameNumbers('dude',{start:1,end:3}),
    frameRate: 10,
    repeat: -1
  })
  this.anims.create({
    key: 'stop',
    frames: this.anims.generateFrameNumbers('dude',{start:0,end:0}),
    frameRate: 10,
    repeat: -1
  })

  scoreText = this.add.text(0, 0, 'Score: 0', { fontSize: '12px', fill: '#000' });
  this.physics.add.overlap(player, ball, collectBall, null, this)
  cursors = this.input.keyboard.createCursorKeys()
}

function collectBall(player, ball){
  //rango: x6,y20 a x154,y138
  ball.y = random(20,138)
  ball.x = random(6,154)
  score++
  scoreText.setText('Score: ' + score)
}

function update(){
  if(gameOver){
    return;
  }
  if (cursors.left.isDown){
    player.x-=this.velocity
    player.anims.play('left',true)
  }else if (cursors.right.isDown){
    player.x+=this.velocity
    player.anims.play('right',true)
  }else if (cursors.up.isDown){
    player.y-=this.velocity
    player.anims.play('up',true)
  }else if (cursors.down.isDown){
    player.y+=this.velocity
    player.anims.play('down',true)
  }else{
    player.anims.play('stop',true)
  }
}
function random(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
