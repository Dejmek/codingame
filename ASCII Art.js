/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var L = parseInt(readline());
var H = parseInt(readline());
var T = readline();

var rows = [],index;
var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?';

T = T.split('');
for (var i = 0; i < H; i++) {
    rows.push(readline());
}

function printLetter(index, row){
    return row.substr(index*L, L);
}

rows.forEach(function(row){
    print(T.map(function(letter){
        index = map.indexOf(letter.toUpperCase());
        return printLetter(index===-1?map.indexOf('?'):index,row);
    }).join(''));
});






// Write an action using print()
// To debug: printErr('Debug messages...');

