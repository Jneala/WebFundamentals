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