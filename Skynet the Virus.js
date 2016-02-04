var inputs = readline().split(' '),
    N = parseInt(inputs[0]), // the total number of nodes in the level, including the gateways
    L = parseInt(inputs[1]), // the number of links
    E = parseInt(inputs[2]), // the number of exit gateways
    network = {};

function Node(index){
    this.index = index;
    this.links = [];
    this.is_gateway = false;
}
Node.prototype.addLink = function(node){
    this.links.push(network[node]);
}
Node.prototype.isGateway = function(){
     this.is_gateway = true;
}


for(var i = 0; i< N; i++){
    network[i] = new Node(i);
}
for (var i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    var N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    var N2 = parseInt(inputs[1]);
    network[N1].addLink(N2);
    network[N2].addLink(N1);
}
for (var i = 0; i < E; i++) {
    network[parseInt(readline())].isGateway();
}
var special_links = [];
var severed_links = [];
for(var i in network){
    if(network[i].links.length > 3 && network[i].links.some(function(node){
            return node.is_gateway;
        }) ){
            network[i].links.forEach(function(node){
                if(node.links.length === 3){
                    special_links.push([i,node.index]);
                }
            });
    }
}

function linkSevered(i1,i2){
    return (!!~severed_links.indexOf(i1 + ' ' + i2) || !!~severed_links.indexOf(i2 + ' ' + i1));
}
// game loop
while (true) {
    var SI = parseInt(readline()), // The index of the node on which the Skynet agent is positioned this turn
         printed = false;
    network[SI].links.forEach(function(node){
        if(node.is_gateway && !linkSevered(SI,node.index)){
            printed = true;
            severed_links.push(SI + ' ' + node.index);
            print(SI, node.index);
        }
    });
    if(!printed){
        if(!special_links.length){
            print(severed_links[0]?severed_links[0]:(SI +' '+network[SI].links[0].index));
        }else{
            printErr(special_links.length==0);
            var s = special_links.shift();
            print(s[0], s[1]);   
        }
    }
}