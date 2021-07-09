const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;

function setup()
{
    createCanvas(400,400);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    box1 = new Box(200, 200, 50, 50);
    box2 = new Box(230, 50, 70, 90);

    ground = new Ground(200, 390, 400, 10);
}

function draw()
{
    background("black");
    Engine.update(myEngine);

    box1.display();
    box2.display();

    ground.display();
}