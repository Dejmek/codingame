/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline()); // Number of elements which make up the association table.
var Q = parseInt(readline()); // Number Q of file names to be analyzed.
var inputs_obj = {},inputs,EXT,MT,tmp,ext;
for (var i = 0; i < N; i++) {
    inputs = readline().split(' ');
    EXT = inputs[0].toLowerCase(); // file extension
    MT = inputs[1]; // MIME type.
    inputs_obj[EXT]=MT;
}

for (var i = 0; i < Q; i++) {
    tmp = readline().split('.');
    if(tmp.length > 1 && inputs_obj[ext = tmp.pop().toLowerCase()]){
        print(inputs_obj[ext])
    }else{
        print('UNKNOWN');
    }
}



// Write an action using print()
// To debug: printErr('Debug messages...');

//print('UNKNOWN'); // For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.