/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var MESSAGE = readline();

var ABC = {
  toBinary: function(str, spaceSeparatedOctets) {
    return str.replace(/[\s\S]/g, function(str) {
      str = ABC.zeroPad(str.charCodeAt().toString(2));
      return !1 == spaceSeparatedOctets ? str : str + " "
    })
  },
  zeroPad: function(num) {
    return "0000000".slice(String(num).length) + num
  }
};

// Write an action using print()
// To debug: printErr('Debug messages...');
var block ='';
var type = -1;
ABC.toBinary(MESSAGE,false).split('').forEach(function(number){
   if(type!=number){
       type=number;
       block += number==0?' 00 ':' 0 ';
   } 
   block+='0'
});
print(block.slice( 1 ));
