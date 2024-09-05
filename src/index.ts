import Player from "./Player";
import { Team } from "./Team";


let player1:Player = {name:"Tom",jersey:4,active:true};
let player2:Player = {name:"Rio",jersey:5,active:false};
let player3:Player = {name:"Henry",jersey:6,active:true};
let player4:Player = {name:"Matt",jersey:7,active:true};
let player5:Player = {name:"Martin",jersey:8,active:false};


let GCTeam:Team = new Team("GCSportsTeam");
GCTeam.addPlayer(player1);
GCTeam.addPlayer(player2);
GCTeam.addPlayer(player3);
GCTeam.addPlayer(player4);
GCTeam.addPlayer(player5);
let count :number = GCTeam.getPlayerCount();
console.log(count);
 GCTeam.logActivePlayers();
 GCTeam.removePlayer(3);
 count = GCTeam.getPlayerCount();
console.log(count);
GCTeam.setActive(1,true);
GCTeam.logActivePlayers();
GCTeam.setActive(3,true);
GCTeam.logActivePlayers();

let activePlayer :Player[] = GCTeam.getActivePlayer();
console.log(activePlayer);
GCTeam.removePlayerByName("Martin");
count = GCTeam.getPlayerCount();
console.log(count);
let activePlayer1 :Player[] = GCTeam.getActivePlayer();
console.log(activePlayer1);
let player6:Player = {name:"Adam",jersey:9,active:true};
GCTeam.addPlayer(player6);
let activePlayer2 :Player[] = GCTeam.getActivePlayer();
console.log(activePlayer2);
GCTeam.sortByName();
let activePlayer3 :Player[] = GCTeam.getActivePlayer();
console.log(activePlayer3);
GCTeam.toString();
