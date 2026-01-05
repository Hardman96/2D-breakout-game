//CANVAS ELEMENT WILL BE CALLED AND GIVEN DESIGN CONTEXT TO BE RENDERED ON SITE LOADING.

//I have used hashtags to divide sections of the code. When I refer to section, I mean current point upto the next hashtags which indicae a new section. When I refer to tutorial, I'm referring to the MDN tutorial specified in the about page.

//**  This code code section is written by me. **

var canvas = document.getElementById("myCanvas");                               //myCanvas = canvas ID, belonging and referencing the canvas element on Index.html.
var ctx = canvas.getContext("2d");                                              //2d = returns drawing context of the canvas.
var page = document.title;                                                      //Accesses the title value of the current web page and stores it for later access.


//##############################################################################

//THESE WILL DEAL WITH THE BACKGROUND OF THE GAME.

//**  This section, with the exception of the house function, is written completely by me. **

var cloudShift = 1;                                                             //This reresents the X axis (horizontal) increment per reload, represents movement speed and movement for the cloud/s.
var cloudX = [100, 140, 70, 700, 740, 670];                                     //X axis positioning data for each cicle forming the cloud.
var cloudY = [90, 140, 140, 290, 350, 350];                                     //Y axis positioning data for each cicle.
var cloudRadius = 50;                                                           //Represents cloud radius, determines cloud size.


//This will draw the mountain for the bakground of the game.
function drawMountain(){
//This function is not intended to be used frequently, all values are embedded to draw a pre-defined structure. Embedded = pre-defined and not meant to be changed.

  //All drawings will be connected, enclosed within beginPath() and closePath(), I use moveTo to segregate drawings(paths).
  ctx.fillStyle="#506264";                                                      //Colour of the mountain body
  ctx.fillRect(145, 500, 1500, 40);                                             //Will draw a rectangle and fill it based on parameters and colour choice. These rectangles will draw the body of the mountain.
  ctx.fillRect(88, 530, 1510, 250);
  ctx.fillRect(340, 450, 870, 50);
  ctx.fillRect(440, 310, 620, 100);
  ctx.fillRect(500, 250, 370, 60);
  ctx.fillRect(360, 400, 815, 50);
  ctx.fillStyle="#9EB3F6";                                                      //Colour of the mountain top.
  ctx.beginPath();                                                              //Start drawing.
  ctx.moveTo(0, 750);                                                           //start point, start drawing here.
  ctx.lineTo(100, 400 + 90);                                                    //This will connect point 'A' to point 'B', A and B correspond to function paramters inputted by the user.
  ctx.lineTo(500, 400);                                                         //This will continue from the previous function, connecting them together forming a drawing defined by all paramters (all 4)
  ctx.moveTo(285, 449);                                                         //Move to a new point to begin a new drawing.
  ctx.lineTo(400 + 200, 387 - 10);                                              //Start new drawing based on definitions provided, stop at the next moveTo function and begin new drawing based on new definitions.
  ctx.lineTo(500 + 10, 250);
  ctx.lineTo(500, 250);
  ctx.moveTo(700, 150);
  ctx.lineTo(500 - 10, 250);
  ctx.lineTo(800, 350);
  ctx.moveTo(750, 250);
  ctx.lineTo(950 + 50, 250);
  ctx.lineTo(1050 + 90, 450 - 100);
  ctx.lineTo(1350 - 100, 400 + 100);
  ctx.moveTo(1170, 500);
  ctx.lineTo(1350, 400);
  ctx.lineTo(1550, 500);
  ctx.moveTo(1700, 200);
  ctx.lineTo(1550, 500);
  ctx.lineTo(1550, 500);
  ctx.lineTo(1880, 200);
  ctx.moveTo(1880, 800);
  ctx.lineTo(1880, 200);
  ctx.lineTo(1780, 200);
  ctx.lineTo(1700, 200);
  ctx.lineTo(1700, 800);
  ctx.moveTo(1550, 700);
  ctx.lineTo(1550, 500);
  ctx.lineTo(1700, 364);
  ctx.lineTo(1700, 365);
  ctx.lineTo(1700, 800);
  ctx.moveTo(0, 800);
  ctx.lineTo(0, 600);
  ctx.lineTo(500, 400);
  ctx.fill();
  ctx.closePath();                                                              //Stop drawing. Close path.
}


//This will draw a mud patch needed to place the tree. Takes 4 inputs(parameters) X position, Y position, width and height.
function drawMud(x, y, width, height){
//This function is not intended for frequent use, just singular use. Defining properties are variable allowing for function reuse.

  ctx.fillStyle="#672416";                                                      //HTML code for colour of the mud.
  ctx.fillRect(x, y, width, height);                                            //Draw a rectangle in X and Y positions on canvas, plus width and height values provided by user, plus colour which is defined by function not by the user.
}


//This will allow the user to draw a traingle of pre-determined size (size is not determined by input). This function takes 3 paramters, colour, X and Y positions.
function drawTriangle(colour, x, y){
//This function is intended to be used multiple times. Embedded values are present to define a triangle shape.

  ctx.fillStyle = colour;                                                       //Takes colour input from user, will be used to paint the triangle.
  ctx.beginPath();                                                              //Start drawing
  ctx.moveTo(x, y);                                                             //Takes X, Y values from the user, used to specify where the drawing will begin.
  ctx.lineTo(x+70, y-70);                                                       //Takes X and Y and will add and subtract to define the drawing structure.
  ctx.lineTo(x+150, y);
  ctx.fill();                                                                   //Fills the drawing path with the specified colour.
  ctx.closePath();
}


//This will draw the background decoration on the right side of the screen.
function drawDecor_right(){
//This function is meant for singular use. Values are embedded for a pre-determined drawing.

  //Fence definition/s.
  ctx.fillStyle="#752E00";                                                      //Colour used to fill the fence.
  ctx.fillRect(1120, 730, 760, 30);                                             //Top fence definition.
  ctx.fillStyle="#020201";                                                      //Colour of shadow detail of the fence.
  ctx.fillRect(1850, 730, 3, 30);                                               //black lines in top fence, intended to represent shadows. These are shadow definitions/s...
  ctx.fillRect(1610, 730, 3, 30);
  ctx.fillRect(1570, 730, 3, 30);
  ctx.fillRect(1530, 730, 3, 30);
  ctx.fillRect(1490, 730, 3, 30);
  ctx.fillRect(1450, 730, 3, 30);
  ctx.fillRect(1210, 730, 3, 30);
  ctx.fillRect(1170, 730, 3, 30);
  ctx.fillStyle="#752E00";                                                      //Colour of fence.
  ctx.fillRect(1120, 730, 6, 170);                                              //Left side fence definition/s.
  ctx.fillRect(1120, 875, 175, 25);
  ctx.fillStyle="#020201";                                                      //Shadow detail colour.
  ctx.fillRect(1170, 875, 3, 25);                                               //Shadow detail definition/s...
  ctx.fillRect(1210, 875, 3, 25);
  ctx.fillRect(1250, 875, 3, 25);
  ctx.fillRect(1290, 875, 3, 25);
  ctx.fillStyle="#752E00";                                                      //left side(middle) fence colour.
  ctx.fillRect(1333, 875, 175, 25);                                             //Left side(middle) fence definition.
  ctx.fillStyle="#020201";                                                      //Left side(middle) shadow detail colour.
  ctx.fillRect(1333, 875, 3, 25);                                               //Left side(middle) shadow detail definition/s...
  ctx.fillRect(1373, 875, 3, 25);
  ctx.fillRect(1413, 875, 3, 25);
  ctx.fillRect(1453, 875, 3, 25);
  ctx.fillRect(1493, 875, 3, 25);
  ctx.fillStyle="#752E00";                                                      //Right side(middle) fence colour.
  ctx.fillRect(1505, 730, 6, 170);                                              //Right side(middle) fence definition/s.
  ctx.fillRect(1505, 875, 190, 25);
  ctx.fillStyle="#020201";                                                      //Right side(middle) fence shadow detail colour.
  ctx.fillRect(1533, 875, 3, 25);                                               //Right side(middle) fence shadow detail definition/s...
  ctx.fillRect(1573, 875, 3, 25);
  ctx.fillRect(1613, 875, 3, 25);
  ctx.fillRect(1653, 875, 3, 25);
  ctx.fillRect(1693, 875, 3, 25);
  ctx.fillStyle="#752E00";                                                      //Right side fence colour.
  ctx.fillRect(1735, 875, 190, 25);                                             //Right side fence definition.
  ctx.fillStyle="#020201";                                                      //Right side fence shadow detail colour.
  ctx.fillRect(1775, 875, 3, 25);                                               //Right side fence shadow definition/s...
  ctx.fillRect(1815, 875, 3, 25);
  ctx.fillRect(1855, 875, 3, 25);
  //Fence definition/s end.

  //Walking path definition/s.
  ctx.fillStyle="#5D5D5D";                                                      //Colour of the sidewalk. This specifies the colour of the sidewalk on the right side of the canvas.
  ctx.fillRect(940, 900, 940, 40);                                              //Right side of the sidewalk, this is the definition of the sidewalk. Definition = location data plus height and size.
  ctx.fillStyle="#909090";                                                      //Colour of the detail for the side walk.
  ctx.fillRect(1092, 900, 3, 40);                                               //This is intended to represent gaps in the sidewalk. These are sidewalk detail definition/s...
  ctx.fillRect(1192, 900, 3, 40);
  ctx.fillRect(1292, 900, 3, 40);
  ctx.fillRect(1392, 900, 3, 40);
  ctx.fillRect(1492, 900, 3, 40);
  ctx.fillRect(1592, 900, 3, 40);
  ctx.fillRect(1692, 900, 3, 40);
  ctx.fillRect(1792, 900, 3, 40);
  ctx.fillStyle="#8A8D8E";                                                      //This is the colour specification for the walkway in the garden/s.
  ctx.fillRect(1298, 820, 32, 80);                                              //These are garden walkway definition/s...
  ctx.fillRect(1698, 820, 32, 80);
}


//This function behaves the same as drawDecor_right() with the difference being X, Y location data.
function drawDecor_left(){
//This function is meant for singular use. Values are embedded for a pre-determined drawing.


  //Fence definition/s.
  ctx.fillStyle="#752E00";
  ctx.fillRect(0, 730, 760, 30);
  ctx.fillStyle="#020201";
  ctx.fillRect(40, 730, 3, 30);
  ctx.fillRect(80, 730, 3, 30);
  ctx.fillRect(320, 730, 3, 30);
  ctx.fillRect(360, 730, 3, 30);
  ctx.fillRect(400, 730, 3, 30);
  ctx.fillRect(440, 730, 3, 30);
  ctx.fillRect(480, 730, 3, 30);
  ctx.fillStyle="#752E00";
  ctx.fillRect(760, 730, 6, 160);
  ctx.fillRect(0, 875, 193, 25);
  ctx.fillStyle="#020201";
  ctx.fillRect(40, 875, 3, 25);
  ctx.fillRect(80, 875, 3, 25);
  ctx.fillRect(120, 875, 3, 25);
  ctx.fillRect(160, 875, 3, 25);
  ctx.fillStyle="#752E00";
  ctx.fillRect(232, 875, 175, 25);
  ctx.fillStyle="#020201";
  ctx.fillRect(272, 875, 3, 25);
  ctx.fillRect(312, 875, 3, 25);
  ctx.fillRect(352, 875, 3, 25);
  ctx.fillRect(392, 875, 3, 25);
  ctx.fillStyle="#752E00";
  ctx.fillRect(407, 730, 6, 170);
  ctx.fillRect(413, 875, 180, 25);
  ctx.fillStyle="#020201";
  ctx.fillRect(392, 875, 3, 25);
  ctx.fillRect(432, 875, 3, 25);
  ctx.fillRect(472, 875, 3, 25);
  ctx.fillRect(512, 875, 3, 25);
  ctx.fillRect(552, 875, 3, 25);
  ctx.fillStyle="#752E00";
  ctx.fillRect(632, 875, 134, 25);
  ctx.fillStyle="#020201";
  ctx.fillRect(672, 875, 3, 25);
  ctx.fillRect(712, 875, 3, 25);
  ctx.fillRect(752, 875, 3, 25);
  ctx.fillRect(752, 730, 3, 30);
  //Fence definition/s end.

  //Walking path definition/s.
  ctx.fillStyle="#5D5D5D";
  ctx.fillRect(0, 900, 940, 40);
  ctx.fillStyle="#909090";
  ctx.fillRect(92, 900, 3, 40);
  ctx.fillRect(192, 900, 3, 40);
  ctx.fillRect(292, 900, 3, 40);
  ctx.fillRect(392, 900, 3, 40);
  ctx.fillRect(492, 900, 3, 40);
  ctx.fillRect(592, 900, 3, 40);
  ctx.fillRect(692, 900, 3, 40);
  ctx.fillRect(792, 900, 3, 40);
  ctx.fillRect(892, 900, 3, 40);
  ctx.fillRect(992, 900, 3, 40);
  ctx.fillStyle="#909090";
  ctx.fillRect(597, 820, 32, 80);
  ctx.fillRect(197, 820, 32, 80);
  ctx.fillStyle="#020201";
  ctx.fillRect(930, 770, 32, 80);

}


//This function defines a patch of grass, this function will take 4 parameters which will be used to define the width, height and location on the canvas.
function drawGrass(x, y, width, height){
//This function is intended for multiple uses, although it is only emant to create a singular object, a patch of grass of variable length, width and placed anywhere on the canvas.

  ctx.fillStyle="#28A424";                                                        //Colour of the grass.
  ctx.fillRect(x, y, width, height);                                            //Function to draw the grass.
}


//This function will draw the Road the car is placed on within the game.
function drawRoad(){
//This function is not intended for multiple uses, definitions are embedded to create a singular drawing object.

  ctx.fillStyle="#A2A2A2";                                                         //Colour of the road.
  ctx.fillRect(0, 940, 2000, 30);                                               //Definition of the road.
  ctx.fillStyle="#E9E9E9";                                                        //Detail of the road, represents the colour of lane dividers for the road.
  ctx.fillRect(50, 952, 90, 5);                                                 //Road lane divider definition/s...
  ctx.fillRect(300, 952, 90, 5);
  ctx.fillRect(600, 952, 90, 5);
  ctx.fillRect(900, 952, 90, 5);
  ctx.fillRect(1200, 952, 90, 5);
  ctx.fillRect(1500, 952, 90, 5);
  ctx.fillRect(1750, 952, 90, 5);
}


//This fuction will draw a house on the canvas. This function takes 11 parameters, allwoing the user to set colours and X, Y values for the house properties.
function drawHouse(roofX, roofY, bodyX, bodyY, windowSetOne_x, windowSetTwo_x, windowSetOne_y, windowSetTwo_y, doorX, doorY, colour){
//This function is intended for multiple uses. This function has embedded values for shape and colour.

//** This function is taken from blackboard, although I have taken the fundamental design and altered it to make it suitable for frequent reuse by adding parameters which will be used to pass values to X and Y values for the different house properties **

    //Roof.
    ctx.fillStyle=colour;                                                       //Takes a colour value specified as a parameter and will be used to colour the roof.
    ctx.beginPath();                                                            //Begin drawing path.
    ctx.moveTo(roofX, roofY);                                                   //Move to specified location and start drawing (from specified location values).
    ctx.lineTo(roofX+30, roofY-70);                                             //Draw (from specified point) + (or -) embedded value/s for a desired shape.
    ctx.lineTo(roofX+200, roofY-70);
    ctx.lineTo(roofX+230, roofY);
    ctx.fill();                                                                 //Fill the drawing with the specified colour.
    ctx.closePath();                                                            //Close current drawing path.

    //House Body.
    ctx.fillStyle="#C5A3A3";                                                    //Colour of the house body.
    ctx.fillRect(bodyX, bodyY, 200, 200);                                       //Rectangle definition forming the house body, plus embedded heigth and width values not intended for change.

    //Windows.
    ctx.fillStyle="#080701";                                                    //Colour of windows for the house.
    ctx.fillRect(windowSetOne_x, windowSetOne_y, 35, 40);                       //Window set one definition. Takes X, Y values as variable inputs and contains embedded width and height values.
    ctx.fillRect(windowSetTwo_x, windowSetOne_y, 35, 40);                       //Window set two definition. Takes X, Y values as variable inputs and contains embedded width and height values.
    ctx.fillRect(windowSetOne_x, windowSetTwo_y, 35, 40);
    ctx.fillRect(windowSetTwo_x, windowSetTwo_y, 35, 40);

    //Door.
    ctx.fillStyle="#215BE1";                                                    //Colour of the door property.
    ctx.fillRect(doorX, doorY, 35, 70);                                         //Door definition. Takes variable X, Y values and has embedded width and height values.
}


//This function will be used to a cloud. This function takes multiple variable X, Y values for the positioning of the circles drawn by the function.
function drawCloud(x1, y1, x2, y2, x3, y3){
//This function is intended to be used multiple times. This function contains embedded values for the shape of the drawing + size.

  ctx.beginPath();                                                              //Start drawing path.
  ctx.arc(x1, y1, cloudRadius, 0, 2 * Math.PI);                                 //Draw a circle in the specified X, Y position on the canvas, drawing will be defined by embedded values in the function.
  ctx.arc(x2, y2, cloudRadius, 0, 2 * Math.PI);
  ctx.arc(x3, y3, cloudRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "#FFFFFF";                                                      //Colour to be used when fill() is called for the current drawing.
  ctx.fill();                                                                   //Fill drawn object with specified colour.
  ctx.closePath();                                                              //Close current drawing path.

}


//##############################################################################


//THESE WILL HANDLE THE BALL, BALL SIZE WILL BE DEFINED, COLOUR, SPAWN POSITION AND BALL MOVEMENT.

//** This section is taken from the specified tutorial in the report, I have changed dx and dy to newX and newY, plus I changed colour + ball size values. **

var ballRadius = 11;                                                            //This will store the size of the ball.
var x = canvas.width/2;                                                         //horizontal position.
var y = canvas.height-30;                                                       //vertical position.
var newX = 3;                                                                   //Will be added to X to create an the illusion of movement per frame. newX & newY correspond to X and Y axis of the canvas.
var newY = -3;                                                                  //Will be added to Y (per reload via setInterval()) to create the illusion of movement.


//Method to define and draw the ball to be drawn on the canvas.
function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);                                      //arc = circle defined by function parameters.
  ctx.fillStyle = "#FF0000";                                                    //paints the ball with the specified colour.
  ctx.fill();
  ctx.closePath();

}


//##############################################################################


//THESE WIlLL DEFINE & DEAL WITH THE CAR AND THE INPUT ASSOCIATED WITH THAT FROM THE USER.

//** This section is partially taken from the tutorial, however it has been repurposed for the use of a new interactive object, the car. **

//** carX & carY is completely written by myself. **
var carX = [1000, 925, 900, 925, 927, 927, 960];                                //This stores the X axis positions for the cars properties, they will be passed to the drawCar function to position the car on the canvas. They will also be accessed when user input is detected and the car moves.
var carY = [950, 950, 918, 895, 915, 896, 895];                                 //This variable serves the same purpose as 'carX[]' but will store the Y axis positions for the car drawing.

//** These variables are taken from the tutorial, although I have renamed them. **
var rightArrowPressed = false;                                                  //Variable (1 of 2) will be used to set the state of a key press, will be used in conjunction with corresponding function/s to allow the user to play/control the car.
var leftArrowPressed = false;


//Will be used to set a key press state, this method will check for user input(=button press).
function keyPressChecker(input){
//** The expressions in this function is taken from the tutorial, I have changed the function parameter name for better readability. **
    if(input.key == "Right" || input.key == "ArrowRight") {                     //Will check for input from specified key, if true, rigth pressed now = true.
        rightArrowPressed = true;                                               //Once key press = true, global scope variable will be assigned a true value which will be accessed by addEventListener() to allow manipulation of Car.
    }
    else if(input.key == "Left" || input.key == "ArrowLeft") {                  //Behaviour is identical to the previous if block, difference = different input button detection and assigns value to a different variable.
        leftArrowPressed = true;
    }
}


//Will check for button release(=no button press). True & false meaning dtetermined by addEventListener() param1, keyup or keydown. keyup=not pressed, keydown=pressed, boolean value true/false corresponds to these events in the function.
function keyReleaseChecker(input){
//** The expressions in this function are taken from the tutorial, I changed the parameter name. **
    if(input.key == "Right" || input.key == "ArrowRight") {
        rightArrowPressed = false;
    }
    else if(input.key == "Left" || input.key == "ArrowLeft") {
        leftArrowPressed = false;
    }
}

//** These are taken from the tutorial. **
document.addEventListener("keydown", keyPressChecker, false);                   //Param1 = event to detect, param2 = function to execute when event = true(detected), param3 capturing and bubbling, false = will execute innermost element and propogate outwards(to outward tags in outer scope).
document.addEventListener("keyup", keyReleaseChecker, false);                   //Will check for no input/release of input.


//Method to draw an object (the car) on the canvas. X, Y values are assigned (and are variable) for each car property.
function drawCar(x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7){
//This function is not intended for multiple uses. This function contains embedded values not intended to be changed.

//** This function is written by myself **

  ctx.beginPath();

  //Wheels
  ctx.fillStyle="black";                                                        //Wheel colour to be used by fill().
  ctx.arc(x1, y1, 15, 0, 2 * Math.PI);                                          //Draw circle, subject to variable X, Y values with embedded values (such as radius) for the drawing of a circle.
  ctx.arc(x2, y2, 15, 0, 2 * Math.PI);
  ctx.fill();                                                                   //Colour drawn circle with the specified colour.
  ctx.closePath();

  //car body
  ctx.fillStyle="blue";                                                         //Colour of car body.
  ctx.fillRect(x3, y3, 125, 30);                                                //Rectangle to be drawn in specified X, Y positions and embedded width and height values.
  ctx.fillRect(x4, y4, 75, 30);

  //car doors
  ctx.fillStyle="black";                                                        //Colour to be applied to the door.
  ctx.fillRect(x5, y5, 71, 27);                                                 //Definition of rectangle to be drawn.

  //car windows
  ctx.fillStyle="grey";                                                         //Colour of the car window/s.
  ctx.fillRect(x6, y6, 71, 27);

  ctx.fillStyle="blue";                                                         //Colour to be used on the divider applied to the car doors.
  ctx.fillRect(x7, y7, 5, 48);

}


//##############################################################################

//THESE WILL DEAL WITH THE BLOCKS ON THE CANVAS, IN TERMS OF DRAWING, STORAGE AND COLLISION DETECTION.

//** This sections soloutions to the problems I took from the tutorial, but I added some new functionality to refine them. **

//** Limitations were implemented by myself to constrain user input. This is new functionality. **
var blockRowLimit = 10;                                                         //This will be used to set a limit of rows per block group, by setting the length of the array which will store the active value for collisions.
var blockColumnLimit = 10;                                                      //This will perform the same service as blockRowLimit but will be used to specify column limit for the array.

//** columns and rows arrays were created by me, these will store the corresponding values for N block groups. This is new functionality.  **
var blockGroups_columns = [];                                                   //This will be used to store column value/s collected by the drawBlockGroup() function. Intended as a foundation (for later implementation) to handle variable integer inputs (0-9) through forms. This will be accessed by the blockCollisionDetection() function for value retrieval.
var blockGroups_rows = [];                                                      //This will be used to store row value/s collected by the drawBlockGroup() function. Purpose is the same as blockGroups_columns, except the storage of column values.

//** Block definitions I took from the tutorial, but I added my own definitions, they are now blocks. **
var blockWidth = 30;                                                            //will define the width of the block.
var blockHeight = 20;                                                           //will define the height of the block.
var blockGapDistance = 5;                                                       //Will define the space between each block.

//** These variables (excluding blockGroupOne) were written by me, however the soloution I have used for collisions are from the tutorial **
var blockShift = -1000;                                                         //Will define the space between the left side of the canvas and the block/s.
var blockGroupOne = [];                                                         //Will for for representation of a block group on a logical level, to allow for collision detection (i.e storage of position data of each block in the group + active boolean property for redrawing & collisions)
var blockGroupTwo = [];                                                         //All block group arrays serve the same purpose as blockGroupOne[] array.
var blockGroupThree = [];
var blockGroupFour = [];
var blockGroupFive = [];
var blockGroupSix = [];
var blockGroupSeven = [];

//** These variables were written by myself. These allow the implementation of new functionality. **
var newShift = 2;                                                               //This will be added to the X position of the blocks in each group for the appearance of movement.
var columnCounter;                                                              //This will correspond to block groups and how many column values have been assigned to A(variable quantity) block groups. The purpose of this variable is for access of values in the blockGroups_columns/rows arrays.
var rowCounter;                                                                 //Intended to allow for value access by recording inputs of row values, this variable will be used in the drawBlockGroup() function to specify array index. Purpose is the same as columnCounter.


//This function is meant to initialise an array (inputted as parameter) so it may store data and represent block groups on a logical level, allowing for more complex operations to be perofrmed, such as collision detection.
function blockGroup_initialisation(blockGroup){
//This function is designed for frequent reuse. This function will only allow an array of length 10 (0-9) to be initialised, all dimensions of the array are subject to the size limit. This is to constrain user input for forms.
//** The body of this function is taken from the tutorial, although I turned it into a function and added a parameter so it may be reused. The limits comparison value was also added by myself, allowing new functionality. **

  for(var col = 0; col < blockColumnLimit; col++){
    blockGroup[col] = [];                                                       //initialises a 1D array, based on limit length. This will represent columns.
      for(var row = 0; row < blockRowLimit; row++){
      blockGroup[col][row] = {x: 0, y: 0, active: 1};                           //initialises a 2D array, consisting of columns and rown (2nd Dimension = rows).
    }
  }
}


function drawBlockGroup(blockGroup, topDist, rightShift, columnCount, rowCount) {
  for (var col = 0; col < columnCount; col++) {
    for (var row = 0; row < rowCount; row++) {
      if (blockGroup[col][row].active === 1) {
        var blockX = col * (blockWidth + blockGapDistance) + blockShift + rightShift;
        var blockY = row * (blockHeight + blockGapDistance) + topDist;

        ctx.beginPath();
        ctx.rect(blockX, blockY, blockWidth, blockHeight);
        ctx.fillStyle = "#4D1C87";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}


//This function will check for collision detection between the ball and tbe floating blocks.
function blockCollisionDetection(blockGroup){
//** The body of this function is partially taken from the tutorial, I added (my additions are) the array and conter values for the for loops for increased reuse with different block groups. **
    for(var col=0; col<blockGroups_columns[columnCounter]; col++) {             //Access the value stored in blockGroups_columns[] index specified by columnCounter, increment col until value is the same as value in specified index.
        for(var row=0; row<blockGroups_rows[rowCounter]; row++) {               //Behaviour/purpose here is the same as the previous loop, except we are accessing the row value specified by rowCounter index. Increment row until the value is the same.
            var block = blockGroup[col][row];                                   //Stores the current state of the blockGroup per cycle for comparison operations.
            if(block.active == 1){                                              //This is a block that is true, thus detection is possible. If true, trigger next scheme. If all conditions = true, then collision (is)= true.
                if(x > block.x && x < block.x+blockWidth && y > block.y && y < block.y+blockHeight) {            //This will determine collision between the ball and block, if all 4 conditions = true, then collision = true.
                    newY = -newY + 1;                                                                            //Change ball direction.
                    block.active = 0;                                                                            //This will set the block to false, thus it will not be drawn by drawBlockGroup upon next reload.
                }
            }
        }
    }
}


//##############################################################################


//**--MAIN--**

//Block groups will be initialised and tracked, allowing for the destruction of individual blocks. These will run outside the main method (drawGame()) allowing the changes to be logged and applied per setInterval reload.
//** initialisation function calls were written by myself **
blockGroup_initialisation(blockGroupOne);                                       //initialise blockGroupOne 2D array of length 10(per dimension), each block will be assigned a bool property for collision tracking, allowing the destruction of blocks.
blockGroup_initialisation(blockGroupTwo);
blockGroup_initialisation(blockGroupThree);
blockGroup_initialisation(blockGroupFour);
blockGroup_initialisation(blockGroupFive);
blockGroup_initialisation(blockGroupSix);
blockGroup_initialisation(blockGroupSeven);

var interval;                                                                   //This will reference setInterval, acting as a parameter for clearInterval clearing the timer and resetting the canvas.

//This is the primary method where all other methods will be wrapped and called by setInterval().
function drawGame(){


    ctx.clearRect(0, 0, canvas.width, canvas.height);                                                       //Clears the pixels with moving objects on the canvas (per reload), prevents a trail from being left behind by moving objects.
    columnCounter = -1;                                                                                     //Resets the column counter so the value stored will match the correct index per drawBlockGroup and blockCollisionDetection calls.
    rowCounter = -1;                                                                                        //Resets the row counter so the value stored will match the correct index per drawBlockGroup and blockCollisionDetection calls.
    drawCloud(cloudX[3], cloudY[3], cloudX[4], cloudY[4], cloudX[5], cloudY[5], cloudRadius);               //Draws 3 circles intended to draw a cloud if positioning values are correct.
    drawMountain();                                                                                         //Draws the mountain in the background of the game.
    drawGrass(0, 750, 760, 150);                                                                            //Draws grass intended for the garden/s of the houses matching the X, Y values.
    drawGrass(1120, 750, 760, 150);
    drawMud(766, 760, 355, 140);                                                                            //Draws mud patch intended for the tree foundation.
    drawDecor_right();                                                                                      //Draws house fencing, garden walkway and side walk + all revelavnt detail for these drawings.
    drawDecor_left();                                                                                       //Purpose + behaviour is identical to drawDecor_right() except this applies decor to left side of the canvas.
    drawTriangle("#3FD031", 870, 810);                                                                      //Draws a triangle, intended to be overlapped with others to form a tree.
    drawTriangle("#EA39DA", 870, 750);
    drawTriangle("#FF1B1B", 870, 700);
    drawHouse(100, 620, 115, 620, 145, 250, 650, 750, 195, 750, "#A50F0F");                                 //Draws a house in the X & Y positions (per each property) + colour.
    drawHouse(500, 620, 515, 620, 545, 650, 650, 750, 595, 750, "#A50F0F");
    drawHouse(1200, 620, 1215, 620, 1245, 1350, 650, 750, 1295, 750, "#A50F0F");
    drawHouse(1600, 620, 1615, 620, 1640, 1750, 650, 750, 1695, 750, "#A50F0F");
    drawRoad();                                                                                             //Draws a road at the bottom of the canvas.
    drawCloud(cloudX[0], cloudY[0], cloudX[1], cloudY[1], cloudX[2], cloudY[2], cloudRadius);
    drawBall();                                                                                             //Draws a ball object, this will be dynamic and subject to player interaction.
    drawCar(carX[0], carY[0], carX[1], carY[1], carX[2], carY[2], carX[3], carY[3], carX[4], carY[4], carX[5], carY[5], carX[6], carY[6]);        //This is the main car the player will control, the object will be drawn in the positions specified.
    drawBlockGroup(blockGroupOne, 100, -200, 7, 4);                                                         //This will draw blocks on the canvas. Array (blockGroup) must be initialised. This function call will take X & Y(positions) + column and row inputs for block group definition, it will also take a blockGroup as an input.
    blockCollisionDetection(blockGroupOne);                                                                 //This will register collisions with the passed (blockGroupOne) block group.
    drawBlockGroup(blockGroupTwo, 500, -200, 7, 4);
    blockCollisionDetection(blockGroupTwo);
    drawBlockGroup(blockGroupThree, 100, 500, 7, 4);
    blockCollisionDetection(blockGroupThree);
    drawBlockGroup(blockGroupFour, 250, 80, 10, 10);
    blockCollisionDetection(blockGroupFour);
    drawBlockGroup(blockGroupFive, 500, 500, 7, 4);
    blockCollisionDetection(blockGroupFive);
    drawBlockGroup(blockGroupSix, 250, -600, 10, 10);
    blockCollisionDetection(blockGroupSix);
    drawBlockGroup(blockGroupSeven, 250, 800, 5, 10);
    blockCollisionDetection(blockGroupSeven);



    //Will check if the position is colliding with the perimeter (right wall + floor) has been exceeded, if true ball directon will be reversed. The second condition will do the opposite, it will check for values(for X axis) approaching 0 or less than the ball.
    //** The expression within this if scheme was taken from the tutorial. **
    if(x + newX > canvas.width-ballRadius || x + newX < ballRadius){
        newX = -newX;                                                           //If condition = true (i.e. ball horizontal position is greater than canvas width or ball horizontal position is less than ball radius) reverse ball direction.
    }

    //Checks for collision with roof and left wall, if the distance between the center of the ball and edge of the wall is the same (or less), reverse ball direction.
    //** The expression here was taken from the tutorial, the internal block contains new functionality, the ball speed will be reset once the corresponding condition = true, this was added by myself **
    if(y + newY < ballRadius) {
        newY = -3;                                                              //This will reset the ball speed back to normal speeds.
        newY = -newY;
    }

    //Creates the end game. Checks ball position (of Y axis) to canvas height, if position is greater than height, then trigger next control scheme
    //** Condition 1 is taken from the tutorial, condition 2 is also taken from the tutorial, however I have added a new parameter for the new car object. **
    else if(y + newY > canvas.height-ballRadius) {
        if(x > carX[2] && x < carX[2] +125) {                                   //check if the ball is greater than car body position + its width, if true reverse Y direction of the ball.
            newY = -newY - 7;                                                   //This will move the ball and its original speed.
        }
        //** The game over block is taken from the tutorial **
        else {                                                                  //If the ball doesn't hit the car body (i.e. previous condition = false), end the game and reload the page.
            alert("Game Over!");                                                //Will trigger a pop up with the passed string.
            document.location.reload();                                         //reloads the current webpage.
            clearInterval(interval);                                            //Clears the timer set by setInterval parameter 2.
        }
    }

    //Allow the user to move the car to the right as long as the car is within the width range of the .
    //** The expression within this statement is taken from the tutorial. **
    if(rightArrowPressed && carX[3] < canvas.width-100){
        carX[0] += 8;                                                           //Adds a value to the current X(horizontal) position value of the car property, allowing movement per frame if control scheme is true.
        carX[1] += 8;
        carX[2] += 8;
        carX[3] += 8;
        carX[4] += 8;
        carX[5] += 8;
        carX[6] += 8;
    }

    //Allows the user to move the car to the left as long as the car doesn't hit the border of the canvas.
    //** This expression is taken from the tutorial, I have added new parameter for the new car object. The block code for this condition was added by me. **
    else if(leftArrowPressed && carX[3] > 0){
        carX[0] -= 8;
        carX[1] -= 8;
        carX[2] -= 8;
        carX[3] -= 8;
        carX[4] -= 8;
        carX[5] -= 8;
        carX[6] -= 8;
    }



    //Once the blocks have moved off screen (exceeded the canvas width) this will spawn it on the opposite end, creating a loop.
    //** This code is written by me **
    if(blockShift > canvas.width + 800){
      blockShift = -1000;                                                       //Spawn position, this will spawn off canvas, allowing the blocks to shift onto the screen. This will happen in perpetuity if the end game scheme is not triggered.
    }

    //This is responsible for cloud respawns, if cloud (left circle) is greater than canvas width, respawn the cloud in specified location off canvas.
    //** This statement is written by me **
    if(cloudX[2] > canvas.width + 100){
      cloudX[0] = -605;                                                         //Stores a new X value for each cloud circle.
      cloudX[1] = -570;
      cloudX[2] = -640;
    }

    //This will handle the second cloud. The purpose & behaviour of this control scheme is the same as the previous cloud scheme.
    //** This function is written by me **
    if(cloudX[3] > canvas.width){
      cloudX[3] = -450;
      cloudX[4] = -410;
      cloudX[5] = -480;

    }

    //** These were taken from the tutorial **
    x += newX;                                                                  //Add newX (aka new x value) per function reload, creating horizontal movement.
    y += newY;                                                                  //Add newY (aka new Y value) per function reload, creating vertical movement.

    //** These were written by me  **
    blockShift += newShift;                                                     //Add a new X position value to default X position value, allowing the block/s to move.
    cloudX[0] += cloudShift;                                                    //Cloud 1. This behaves the same as the previous 3 expressions, this will deal with the clouds allowing them to move.
    cloudX[1] += cloudShift;
    cloudX[2] += cloudShift;
    cloudX[3] += cloudShift;                                                    //Cloud 2. Access X value of cloud 2(circle 1, left side) and increment its value for cloud movement.
    cloudX[4] += cloudShift;
    cloudX[5] += cloudShift;

}

//The purpose of this function is to wrap all background associated code into a single function for the help and about pages.
function drawBackground(){


  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCloud(cloudX[3], cloudY[3], cloudX[4], cloudY[4], cloudX[5], cloudY[5], cloudRadius);               //Draws 3 circles intended to draw a cloud if positioning values are correct.
  drawMountain();                                                                                         //Draws the mountain in the background of the game.
  drawGrass(0, 750, 760, 150);                                                                            //Draws grass intended for the garden/s of the houses matching the X, Y values.
  drawGrass(1120, 750, 760, 150);
  drawMud(766, 760, 355, 140);                                                                            //Draws mud patch intended for the tree foundation.
  drawDecor_right();                                                                                      //Draws house fencing, garden walkway and side walk + all revelavnt detail for these drawings.
  drawDecor_left();                                                                                       //Purpose + behaviour is identical to drawDecor_right() except this applies decor to left side of the canvas.
  drawTriangle("#3FD031", 870, 810);                                                                      //Draws a triangle, intended to be overlapped with others to form a tree.
  drawTriangle("#EA39DA", 870, 750);
  drawTriangle("#FF1B1B", 870, 700);
  drawHouse(100, 620, 115, 620, 145, 250, 650, 750, 195, 750, "#A50F0F");                                 //Draws a house in the X & Y positions (per each property) + colour.
  drawHouse(500, 620, 515, 620, 545, 650, 650, 750, 595, 750, "#A50F0F");
  drawHouse(1200, 620, 1215, 620, 1245, 1350, 650, 750, 1295, 750, "#A50F0F");
  drawHouse(1600, 620, 1615, 620, 1640, 1750, 650, 750, 1695, 750, "#A50F0F");
  drawRoad();                                                                                             //Draws a road at the bottom of the canvas.
  drawCloud(cloudX[0], cloudY[0], cloudX[1], cloudY[1], cloudX[2], cloudY[2], cloudRadius);

  //This is responsible for cloud respawns, if cloud (left circle) is greater than canvas width, respawn the cloud in specified location off canvas.
  if(cloudX[2] > canvas.width + 100){
    cloudX[0] = -605;                                                         //Stores a new X value for each cloud circle.
    cloudX[1] = -570;
    cloudX[2] = -640;
  }

  //This will handle the second cloud. The purpose & behaviour of this control scheme is the same as the previous cloud scheme.
  if(cloudX[3] > canvas.width){
    cloudX[3] = -450;
    cloudX[4] = -410;
    cloudX[5] = -480;

  }


  cloudX[0] += cloudShift;                                                      //Cloud 1. This behaves the same as the previous 3 expressions, this will deal with the clouds allowing them to move.
  cloudX[1] += cloudShift;
  cloudX[2] += cloudShift;
  cloudX[3] += cloudShift;                                                      //Cloud 2. Access X value of cloud 2(circle 1, left side) and increment its value for cloud movement.
  cloudX[4] += cloudShift;
  cloudX[5] += cloudShift;

}

//This function will determine the page calling canvas.js, if the index.html page is calling the script, execute drawGame() else run background for any other page but index.html
function run(){
//** This function is written by myself **
  if(page == "Game"){
      interval = setInterval(drawGame, 10);                                       //This will call the drawGame() function(param1) every 10 miliseconds(para2) This will allow movement to happen on the canvas.
  }else{
      interval = setInterval(drawBackground, 10);
  }
}

run();                                                                          //This will run the drawGame() or drawBackground() depending on the page accessing the script.
