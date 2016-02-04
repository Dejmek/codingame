/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var road = parseInt(readline()); // the length of the road before the gap.
var gap = parseInt(readline()); // the length of the gap.
var platform = parseInt(readline()); // the length of the landing platform.

var jump = false;
var max_speed = 0;
var dist = 0;
while(dist<=platform){
    max_speed++;
    dist+=max_speed;
}
printErr(max_speed, gap);
// game loop
while (true) {
    var speed = parseInt(readline()); // the motorbike's speed.
    var coordX = parseInt(readline()); // the position on the road of the motorbike.
    if(coordX+speed >road){
        if(jump){
           print('SLOW');  
        }else{
       print('JUMP'); 
       jump = true;
        }

    }else{
        if(speed<max_speed){
            print('SPEED');
        }else if(speed>max_speed || speed>gap+1){
            print('SLOW'); 
        }else{
            print('WAIT'); 
        }
        
    }
    // Write an action using print()
    // To debug: printErr('Debug messages...');

     // A single line containing one of 4 keywords: SPEED, SLOW, JUMP, WAIT.
}