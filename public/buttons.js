var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
  game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
  game.load.image('background','assets/misc/starfield.jpg');
  game.load.image('sky0','assets/skies/space2.png');
  game.load.image('sky1','assets/skies/cavern1.png');
  game.load.image('sky2','assets/skies/chrome.png');
  game.load.image('sky3','assets/skies/fire.png');
  game.load.image('sky4','assets/skies/fog.png');
  game.load.image('sky5','assets/skies/sky1.png');
  game.load.image('sky6','assets/skies/toxic.png');

}

var button;
var background;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;

function create(){
  game.stage.backgroundColor = '#182d3b';

  background = game.add.tileSprite(0, 0, 800, 600, 'background');

  button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);

  button.onInputOver.add(over, this);
  button.onInputOut.add(out, this);

  function over() {
    console.log('button over');
  }

  function out() {
    console.log('button out');
  }

  function actionOnClick () {
    background.visible =! background.visible;
  }

  background = game.add.sprite(0, 0, 'sky0');
  background.name = 'background';

  //  Standard button (also used as our pointer tracker)
  button1 = game.add.button(100, 100, 'button', changeSky, this, 2, 1, 0);
  button1.name = 'sky1';
  button1.anchor.setTo(0.5, 0.5);

  //  Rotated button
  button2 = game.add.button(330, 200, 'button', changeSky, this, 2, 1, 0);
  button2.name = 'sky2';
  button2.angle = 24;
  button2.anchor.setTo(0.5, 0.5);


  //  Scaled and Rotated button
  button6 = game.add.button(570, 200, 'button', changeSky, this, 2, 1, 0); // anchor 0.5
  button6.name = 'sky6';
  button6.angle = 32;
  button6.scale.setTo(2, 2);
  button6.anchor.setTo(0.5, 0.5);

  //  works regardless of world angle, parent angle or camera position
  // game.world.setBounds(0, 0, 2000, 2000);
  // game.world.angle = 10;
  // game.camera.x = 300;

  function changeSky (button) {
    background.loadTexture(button.name);
  }

  function render () {
  }
}

function update(){
  button1.angle +=1
}
