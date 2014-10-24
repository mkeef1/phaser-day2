var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload(){
  game.load.image('hotdog', 'assets/sprites/hotdog.png');
  game.load.image('pineapple', 'assets/sprites/pineapple.png');
  game.load.image('background','assets/misc/starfield.jpg');
  game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
}

var background, hotdog, button, tween;

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  background = game.add.tileSprite(0, 0, 800, 600, 'background');
  hotdog = game.add.sprite(50, 50, 'hotdog');
  pineapple = game.add.sprite(200, 200, 'pineapple');
  button = game.add.button(game.world.centerX - 95, 400, 'button', actionOnClick, this, 2, 1, 0);
  hotdog.anchor.setTo(0.5, 0.5);

  game.physics.arcade.enable(pineapple);

  function actionOnClick(){
    console.log('dog moving!');
    tween = game.add.tween(hotdog).to({x: Math.random() * 700, y: Math.random() * 500}, Math.random() * 4000, Phaser.Easing.Linear.None, true, 0, 1000, true)
  }
}

function update(){
  hotdog.angle += 1;
   //  If the sprite is > 8px away from the pointer then let's move to it
    if (game.physics.arcade.distanceBetween(hotdog, pineapple) > 8)
    {
        //  Make the object seek to the active pointer (mouse or touch).
        game.physics.arcade.moveToObject(pineapple, hotdog, 100);
    }

}
