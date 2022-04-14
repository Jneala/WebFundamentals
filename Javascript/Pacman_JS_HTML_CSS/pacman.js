//My first time doing the pacman app

var world = [
  [2,2,2,2,2,2,2,2,2,2],
  [2,1,2,1,1,1,1,2,1,2],
  [2,1,2,1,1,2,1,2,1,2],
  [2,1,2,2,1,2,1,2,1,2],
  [2,1,1,2,1,2,1,2,1,2],
  [2,1,1,2,1,2,1,2,1,2],
  [2,1,1,1,1,2,1,1,1,2],
  [2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
  x: 1,
  y: 1
};
var score = 0;

function displayWorld(){
  var output="";
  for (var y=0; y<world.length; y++){
    output += '\n<div class="row">\n'
    for(var x=0; x<world[y].length; x++){
        if(world[y][x] === 2){
            output += '<div class="brick"></div>';
        } else if(world[y][x] === 1){
            output += '<div class="coin"></div>';
        } else if(world[y][x] === 0){
            output += '<div class="empty"></div>';
        } else if(world[y][x] === 3){
            output += '<div class="fruit"></div>'
        }
    }
    output += '\n</div>';
  }
  document.getElementById('world').innerHTML = output;
  }  
function displayPacman() {
  document.getElementById('pacman').style.top = pacman.y*25+"px";
  document.getElementById('pacman').style.left = pacman.x*25+"px";
}
function displayScore(){
  document.getElementById('score').innerHTML = score;
}

displayWorld();
displayPacman();
displayScore();

document.onkeydown = function(e) {
  if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) {
    pacman.x--;
  } 
  else if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2) {
    pacman.x++;
  } 
  else if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2) {
    pacman.y--;
  } 
  else if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2) {
    pacman.y++;
  } 

  if(world[pacman.y][pacman.x] == 1) {
    world[pacman.y][pacman.x] = 0;
    score+= 10;
    displayWorld();
    displayScore();
  }
  
  // console.log(e.keyCode);
  displayPacman();
}