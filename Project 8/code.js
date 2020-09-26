var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a8cabc0a-09c0-4d98-932f-ba81029036c9","4d10fcb5-b478-470e-9928-a412db8aa3a3","25a19c97-929d-4dd3-8969-04732573ff59","20f549ff-a19b-4eb8-88c2-e74227591e93","cfe6488b-fe21-4662-b1af-dfcbe0544517","c9016a41-10a2-43f7-a76d-6d5d9621e770","674b5dc4-e3a8-4e21-a5a5-1cb0925f6d1e","4e398720-55ed-4a1e-8382-ec7ae2168d93","ebde8d0a-0899-4c6d-b887-d2feb3a793e5"],"propsByKey":{"a8cabc0a-09c0-4d98-932f-ba81029036c9":{"name":"player","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"nlki81uIeqIgcWIxOs2pdhahIhJWzd2N","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/a8cabc0a-09c0-4d98-932f-ba81029036c9.png"},"4d10fcb5-b478-470e-9928-a412db8aa3a3":{"name":"player_happy","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"xhBGdHfwOuYT48_qTrOU9l4VqUQuHUnR","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/4d10fcb5-b478-470e-9928-a412db8aa3a3.png"},"25a19c97-929d-4dd3-8969-04732573ff59":{"name":"player_right","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"2zER4CWYdkuBwH7UnlNEOF1cRQwhXOiL","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/25a19c97-929d-4dd3-8969-04732573ff59.png"},"20f549ff-a19b-4eb8-88c2-e74227591e93":{"name":"player_left","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"VX6tJtqYckZJvq828y4B6oaWAYojJdqN","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/20f549ff-a19b-4eb8-88c2-e74227591e93.png"},"cfe6488b-fe21-4662-b1af-dfcbe0544517":{"name":"sun","sourceUrl":null,"frameSize":{"x":52,"y":72},"frameCount":1,"looping":true,"frameDelay":12,"version":"p0WN5aMRd3AGX.oY_F_bk.2qXz4Tb6pb","loadedFromSource":true,"saved":true,"sourceSize":{"x":52,"y":72},"rootRelativePath":"assets/cfe6488b-fe21-4662-b1af-dfcbe0544517.png"},"c9016a41-10a2-43f7-a76d-6d5d9621e770":{"name":"ground","sourceUrl":null,"frameSize":{"x":400,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"kTXnzqKgZBPUM4LtqvlQjiSUpyO9MQut","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":60},"rootRelativePath":"assets/c9016a41-10a2-43f7-a76d-6d5d9621e770.png"},"674b5dc4-e3a8-4e21-a5a5-1cb0925f6d1e":{"name":"spike","sourceUrl":null,"frameSize":{"x":10,"y":11},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rm5nnrHMpt5c7kVoV136OsJdzJJ9I71Q","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":11},"rootRelativePath":"assets/674b5dc4-e3a8-4e21-a5a5-1cb0925f6d1e.png"},"4e398720-55ed-4a1e-8382-ec7ae2168d93":{"name":"trampoline","sourceUrl":null,"frameSize":{"x":30,"y":2},"frameCount":1,"looping":true,"frameDelay":12,"version":"3cdbyf6JEArPX0rkaPv82ZFiHilslrzQ","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":2},"rootRelativePath":"assets/4e398720-55ed-4a1e-8382-ec7ae2168d93.png"},"ebde8d0a-0899-4c6d-b887-d2feb3a793e5":{"name":"Door","sourceUrl":null,"frameSize":{"x":20,"y":31},"frameCount":1,"looping":true,"frameDelay":12,"version":"9Qq9I21OMVtP0tJ83k2sCuZUV0s2pZxP","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":31},"rootRelativePath":"assets/ebde8d0a-0899-4c6d-b887-d2feb3a793e5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var sun=createSprite(380,20,52,72);
sun.setAnimation("sun");
var ground=createSprite(200,370,400,60);
ground.setAnimation("ground");
var player=createSprite(30,330,30,30);
var door=createSprite(180,105,20,28);
var spike1=createSprite(70,335,10,11);
var spike2=createSprite(170,335,10,11);
var spike3=createSprite(240,335,10,11);
var spike4=createSprite(300,335,10,11);
var spike5=createSprite(280,233,10,11);
var spike6=createSprite(200,113,10,11);
var trampoline1=createSprite(380,320,30,2);
var trampoline2=createSprite(340,280,30,2);
var trampoline3=createSprite(300,240,30,2);
var trampoline4=createSprite(280,240,30,2);
var trampoline5=createSprite(280,200,30,2);
var trampoline6=createSprite(240,160,30,2);
var trampoline7=createSprite(200,120,30,2);
var trampoline8=createSprite(180,120,30,2);
var trampoline9=createSprite(200,240,30,2);
var trampoline10=createSprite(160,200,30,2);
var trampoline11=createSprite(120,160,30,2);
var trampoline12=createSprite(150,120,30,2);
player.setAnimation("player");
door.setAnimation("Door");
var gameState="play";
createEdgeSprites();
var fails = 0;
var wins = 0;
var spike=createGroup();
spike.add(spike1);
spike.add(spike2);
spike.add(spike3);
spike.add(spike4);
spike.add(spike5);
spike.add(spike6);
spike.setAnimationEach("spike");
var trampoline=createGroup();
trampoline.add(trampoline1);
trampoline.add(trampoline2);
trampoline.add(trampoline3);
trampoline.add(trampoline4);
trampoline.add(trampoline5);
trampoline.add(trampoline6);
trampoline.add(trampoline7);
trampoline.add(trampoline8);
trampoline.add(trampoline9);
trampoline.add(trampoline10);
trampoline.add(trampoline11);
trampoline.add(trampoline12);
trampoline.setAnimationEach("trampoline");

function draw() {
 background(rgb(127,184,255));
 player.bounceOff(edges);
 fill("white"); 
 text(wins,90,20);
 text("wins:",60,20);
  text(fails,190,20);
 text("fails:",160,20);
 
 if(player.isTouching(spike)){
  gameState="fail";
 }
 
 if(player.isTouching(door)){
  gameState="win";
 }

 if(player.isTouching(trampoline)&&keyDown("up"))
 {
   player.velocityY=-6;
 }
 

  if(keyWentDown("up") && player.y === 330)
  {
   player.setAnimation("player");
   player.velocityY=-6;
  }
 player.velocityY=player.velocityY+0.5;
 player.collide(ground);
 
 if(keyDown("left"))
 {
   player.setAnimation("player_left");
   player.velocityX=-3;
 }
 if(keyDown("right"))
 {
   player.setAnimation("player_right");
   player.velocityX=3;
 }
 if(keyWentUp("right"))
 {
   player.velocityX=0;
 }
 if(keyWentUp("left"))
 {
   player.velocityX=0;
 }
 if(gameState === "fail"|| gameState === "win"){
   if(gameState === "fail"){
     if(keyDown("r"));{
     player.setAnimation("player");
     player.x=30;
     player.y=330;
     gameState="play";
     fails=fails+1;
     }
     }
     if(gameState === "win"){
     if(keyDown("r"));{
     player.setAnimation("player_happy");
     player.x=30;
     player.y=330;
     gameState="play";
     wins=wins+1;
     }
     }
 }

 
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
