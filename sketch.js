var ball;
var dball,database;
var dposition;

function setup(){
    database = firebase.database();//connect the db
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    dball = database.ref('ball/position');
    dball.on("value",readPosition);

}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref('ball/position').set({
        x : dposition.x + x,
        y : dposition.y + y
    })
    
}

function readPosition(data)
{
    dposition = data.val();
    ball.x = dposition.x;
    ball.y = dposition.y;
}
