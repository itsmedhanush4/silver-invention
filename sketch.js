var balloon,balloonImage1,balloonImage2;
var database;
var height;
var car,carImg;
var location; 

function preload(){
   bg =loadImage("Images/cityImage.png");
   carImg=loadImage("Images/car.png")
   balloonImage1=loadAnimation("Images/HotAirBallon01.png");
   balloonImage2=loadAnimation("Images/HotAirBallon01.png","Images/HotAirBallon01.png",
   "Images/HotAirBallon01.png","Images/HotAirBallon02.png","Images/HotAirBallon02.png",
   "Images/HotAirBallon02.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png","Images/HotAirBallon03.png");
  }

//Function to set initial environment
function setup() {

  database=firebase.database();

  createCanvas(1500,700);

  balloon=createSprite(250,650,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;
  
  car=createSprite(100,600,10,10)
  car.addImage(carImg)
  car.scale=0.4
  

  // var balloonHeight=database.ref('balloon/height');
  // balloonHeight.on("value",readHeight, showError);
  // var carLocation=database.ref('car/location')
  // carLocation.on("value",readLocation, showError)

  //.on is a watchman which will wait for any changes in database. when any change happenes, it calls the function 


  textSize(20); 
}


function draw() {
  background(bg);

  // if(keyDown(LEFT_ARROW)){
  //   updateHeight(-10,0);
  //   balloon.addAnimation("hotAirBalloon",balloonImage2);
  // }
  // else if(keyDown(RIGHT_ARROW)){
  //   updateHeight(10,0);
  //   balloon.addAnimation("hotAirBalloon",balloonImage2);
  // }
  // else if(keyDown(UP_ARROW)){
  //   updateHeight(0,-10);
  //   balloon.addAnimation("hotAirBalloon",balloonImage2);
  //   balloon.scale=balloon.scale -0.005;
  // }
  // else if(keyDown(DOWN_ARROW)){
  //   updateHeight(0,+10);
  //   balloon.addAnimation("hotAirBalloon",balloonImage2);
  //   balloon.scale=balloon.scale+0.005;
  // }
  //  if(keyDown(RIGHT_ARROW)){
  //    moveCar(-10)
  //  }

  //  if(keyDown(LEFT_ARROW)){
  //    moveCar(+10)
  //  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
}


// function moveCar(x){
//   database.ref('car/location').set({
//     'x':location.x+x
//   })
// }

// function readLocation(data){
//   location=data.val()
//   car.x=locatiion.x
// }

function updateHeight(x,y){
  database.ref('balloon/height').set({
    'x': height.x + x ,
    'y': height.y + y
  })
}


// function readHeight(data){
//   height = data.val();
//   balloon.x = height.x;
//   balloon.y = height.y;
// }



function showError(){
  console.log("Error in writing to the database");
}
// add car make it go right and left when a and d are pressed
