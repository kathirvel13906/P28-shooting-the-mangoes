const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var stone1;

function preload() {
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1175,150,30);
	mango3=new mango(1050,75,30);
	mango4=new mango(1000,125,30);
	mango5=new mango(950,200,30);
	mango6=new mango(1150,200,30);
	mango7=new mango(1050,175,30);

	stone1 = new Stone(230,410,30);

	string = new Slingshot(stone1.body, {x:230, y:410});

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {
  background(230);

  text("PRESS SPACE TO RESTART", 200, 40);

  image(boy ,200,340,200,300);
  
  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  string.display();

  stone1.display();

  groundObject.display();
  
  detectollision(stone1, mango1);
  detectollision(stone1, mango2);
  detectollision(stone1, mango3);
  detectollision(stone1, mango4);
  detectollision(stone1, mango5);
  detectollision(stone1, mango6);
  detectollision(stone1, mango7);
}

function mouseDragged() {
    Matter.Body.setPosition(stone1.body,{x: mouseX, y: mouseY});
}

function mouseReleased() {
    string.fly();
}

function detectollision(stoneObject, mangoObject) {
	mangoPos = mangoObject.body.position;
	stonePos = stoneObject.body.position;

	var distance = dist(stonePos.x, stonePos.y, mangoPos.x, mangoPos.y);
	if(distance<=stoneObject.r+mangoObject.r) {
		Matter.Body.setStatic(mangoObject.body, false);
	}
}

function keyPressed() {
    if(keyCode === 32) {
        string.attach(stone1.body);
    }
}