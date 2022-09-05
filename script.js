// the fighter attack why is it not working
//need to makes buttons 
// 




//create fighter and enemy
let fighter;

function Figther(classType,health,punch ,strength, agility, speed){
   this.classType = classType;
   this.health = health;
   this.punch = punch
   this.strength = strength;
   this.agility = agility;
   this.speed = speed;

}

let fighterMoves = {
  calcAttack: function() {
    //attacking first
    let getPlayerSpeed = player.speed;
    let getEnemySpeed= enemy.speed;
  },

// player attacks 
  let fighterAttack = function(){ 
    let calcBaseDamage;
    if (fighter.punch > 0){ //change value later
      calcBaseDamage = fighter.strength * fighter.punch / 100 
    } else{
      calcBaseDamage = fighter.strength * fighter.agility / 100
    } 
    let offsetDamage = Math.floor(Math.random()* Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    //nnumber of hits
    let numofHits = Math.floor(Math.random()* Math.floor(fighter.agility / 10)/2)+ 1;
    let attackValues = [calcOutputDamage, numofHits];
     return attackValues;
  },
  let enemyAttack = function(){ 
    let calcBaseDamage;
    if (enemy.punch > 0){ //change value later
      calcBaseDamage = enemy.strength * enemy.punch / 100 
    } else{
      calcBaseDamage = enemy.strength * enemy.agility / 100
    } 
    let offsetDamage = Math.floor(Math.random()* Math.floor(10));
    let calcOutputDamage = calcBaseDamage + offsetDamage;
    //nnumber of hits
    let numofHits = Math.floor(Math.random()* Math.floor(enemy.agility / 10)/2)+ 1;
    let attackValues = [calcOutputDamage, numofHits];
     return attackValues;
  }
}

let enemy = 0

function Enemy(enemyType,health, punch, strength, agility, speed){
    this.classType = enemyType;
    this.health = health;
    this.punch = punch
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
 
 }
   

 //               GAME PLAY 

 let gamePlay = {
    setGamestart: function(classType){
      this.resetFighter(classType);
      this.setPreFight();
    
    }, 
    resetfighter: function(classType){
      switch(classType){
        case "Ms.Pam":
          fighter = new Fighter(classType,100,200,70 ) // do for each character can rewrite as if||else to make it easier for others
          break; 

          case "Ms.Pearly":
          fighter = new Fighter(classType,100,200,70 ) // do for each character can rewrite as if else to make it easier for me
          break;

          // case "Pearly":
          // fighter = new Fighter(classType,100,200,70 ) // do for each character can rewrite as if else to make it easier for me
          // break;

          // case "Karyn":
          // fighter = new Fighter(classType,100,200,70 ) // do for each character can rewrite as if else to make it easier for me
          // break;
      }
      let getInterface = document.querySelector(".interface");
      getInterface.innerHTML = '<img src=" /' + classType.toLowerCase()+ '.png" class="img-avatar><div><h3>'+ classType + 
      '</h3><p>Health: ' + this.health +  '</p><p>Strength;' + this.strength + 
      '</p><p>Agility' + this.agility + '</p><p>Speed' + this.speed + '</p></div>';
    },  // health punch strength agility speed
     setPreFight(){
 let getHeader = document.querySelector('header');
 let getActions = document.querySelector('actions');
 let getArena = document.querySelector('arena');

  getHeader.innerHTML = '<p>Task: </p>';
  getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="gamePlay.setFight()">Defend!</a>';
  getArena.style.visibility = 'visible';

    },
      setFight(){
 let getHeader = document.querySelector('header');
 let getActions = document.querySelector('actions');
 let getArena = document.querySelector('arena');

 // creating opponants
 
 
 let enemy00 = new Enemy(Delilah, 75, 29, 100);
 let enemy01 = new Enemy(Karyn, 100, 40, 17, 62);
 let enemy02 = new Enemy(Gertrude, 75, 29, 90, 100);
 let randomEnemy = Math.floor(Math.random()* Math.floor(3));
    switch (randomEnemy) {
      case 0:
        enemy = enemy00
        break;
    
      case 1:
        enemy = enemy01
        break;
      case 2:
        enemy = enemy02
        break;
    }
getHeader.innerHTML = '<p>Task: Choose your move</p>'
getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="playerMoves.calcAttack()">Fight!</a>';
getEnemy.innerHTML= '<img src="will add enemy picture later"' + enemy.enemyType.toLowerCase() + '.png "alt="' + enemy.enemyType 
+ '"class="fighterimg"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health +  
'</p><p>Strength: '+ enemy.strength +'</p><p>Agility: ' + enemy.agility+ '</p><p>Speed: ' + enemy.speed +'</p></div>';
getArena.style.visibility
    }
 }


 // END GAME