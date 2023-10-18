//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;


function createManager(managerName,managerAge,currentTeam,trophiesWon){
  let Manager=[managerName,managerAge,currentTeam,trophiesWon]
  return Manager
}


try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e){}


//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

function createFormation(formation){

  if(formation.length===0){
    return null;
  }
  else{
    return {
      defender:formation[0],
      midfield:formation[1],
      forward:formation[2]
    }
  }
}
  


try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year){
  let data=players.filter(player => player.debut==year);
  return data;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position){
  let data=players.filter(player => player.position==position);
  return data;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName){
  var array=[];
  for(let i=0; i<players.length; i++){
    for(let j=0; j<players[i].awards.length; j++){
      if(players[i].awards[j].name===awardName){
        array.push(players[i]);
      }
    }
  }
  return array;
}

//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes){
  var Array=[];
  var count=0,p=0;
  var j;
  for(let i=0; i<players.length; i++){
    for(j=0; j<players[i].awards.length; j++){
      if(players[i].awards[j].name==awardName){
        count++;
      }
    }
    if(count==noOfTimes){
      Array.push(players[i])
    }
    count=0;
  }
  return Array;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function filterByAwardxCountry(awardName,country){
  let awardsData=filterByAward(awardName);
  let data=awardsData.filter(player=>player.country==country );  
  return data;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age){
let data=players.filter(player=>(player.age<age && player.team==team && player.awards.length>= noOfAwards));
return data;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge(){
  for(let i=0; i<players.length; i++){
    for(let j=i+1; j<players.length; j++){
      if(players[i].age<players[j].age){
        let temp=players[i];
        players[i]=player[j];
        players[j]=temp;
      }
    }
  }
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names
function compare(a,b){
  var value=0;
  if(a.name>b.name){value=1;}
  else if(a.name<b.name){value=-1;}
  else{value=0;}
}
function SortByNamexAwardxTimes(awardname,noOfTimes,country){
  let dataOne=filterByAwardxTimes(awardname,noOfTimes);
  let dataTwo=dataone.filter(player=>player.country==country);
  return dataTwo.sort(compare);
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
function SortByNamexOlderThan(age){
  let data=players.filter(player=>player.age>age);
  return data;
}
