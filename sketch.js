var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // loads sound 
    music=loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(100,590,180,30);
    block1.shapeColor = "blue";

    block2 = createSprite(300,590,180,30);
    block2.shapeColor = "orange";

    block3 = createSprite(500,590,180,30);
    block3.shapeColor = "red";

    block4 = createSprite(700,590,180,30);
    block4.shapeColor = " yellow";

    

    ball = createSprite(random(10,750),300,20,20);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = -2.5;
    ball.velocityY = 3;
   

}

function draw() {
    background(rgb("0,0,0"));
    edges=createEdgeSprites();
   ball.bounceOff(edges);

    
    //code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



   if(block2.isTouching(ball)){
        ball.shapeColor = "orange";
         // set velocityX and velocityY of ball as 0
        ball.velocityY = 0;
        ball.velocityX = 0;
        // code to stop music
        music.stop();
    }

    // code to bounce off ball from the block3;
    if(block3.isTouching(ball)){
        bounceOff(ball,block3);
        ball.shapeColor = "red";
        music.play();
    }
    // code to bounce off ball from the block4
    if(block4.isTouching(ball)){
        bounceOff(ball,block4);
        ball.shapeColor = "yellow";
        music.play();
        }


    
    drawSprites();
}
