/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var target = {i:0,h:0};
function fire(i){
    printErr(target.i);
    if(i===target.i){
        print('FIRE');
        target = {i:0,h:0};
    }else{
        print('HOLD');
    }
}
// game loop
while (true) {
    var inputs = readline().split(' ');
    var spaceX = parseInt(inputs[0]);
    var spaceY = parseInt(inputs[1]);
    for (var i = 0; i < 8; i++) {
        var mountainH = parseInt(readline()); // represents the height of one mountain, from 9 to 0. Mountain heights are provided from left to right.
        if(target.h < mountainH){
            target.h= mountainH;
            target.i = i;
        }
    }
    fire(spaceX);
    
}