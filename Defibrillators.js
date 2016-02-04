/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var LON = readline().replace(',', '.')*1,
    LAT = readline().replace(',', '.')*1,
    N = parseInt(readline()),
    defibrilators = [];
function parseDefibrilatorInput(input){
    var tmp = input.split(';');
    return {cordinates : [tmp.pop().replace(',','.')*1, tmp.pop().replace(',','.')*1], index : tmp.shift(), name:tmp.shift()}
}
function calculateDistance(lat, lon){
    var x = (LON-lon)*Math.cos((lat+LAT)/2);
    var y = LAT - lat;
    return Math.cbrt(((x*x) + (y*y))) * 6371;
}
for (var i = 0; i < N; i++) {
    defibrilators.push(parseDefibrilatorInput(readline()));
}
var closest = {d:false};
defibrilators.forEach(function(defibrilator){
    defibrilator.d = calculateDistance(defibrilator.cordinates[0],defibrilator.cordinates[1]);
    if(closest.d === false ||  closest.d >= defibrilator.d){
        closest = defibrilator;
    }
});


// Write an action using print()
// To debug: printErr('Debug messages...');

print(closest.name);