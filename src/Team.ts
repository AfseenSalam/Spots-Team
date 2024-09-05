import Player from "./Player";
export class Team{
    players:Player[]=[];
    teamName :string;

    constructor(teamName:string){
        this.teamName = teamName;
        
    }

    addPlayer(newPlayer :Player){
this.players.push(newPlayer);
    }
    removePlayer(index:number){
        this.players.splice(index,1);
    }
    setActive(index:number,Isactive:boolean){
this.players[index].active = Isactive;
    }
    getPlayerCount(){
       return this.players.length;
    }
    logActivePlayers(){
        this.players.forEach(p=>{
            if(p.active){
                console.log(`Name: ${p.name}`);
            }
        });
    }
    getActivePlayer():Player[]{
        return this.players.filter(p=>p.active);

    }
    removePlayerByName(n:string){
        let index : number = this.players.findIndex(player => player.name === n);
        this.players.splice(index,1);

    }
    sortByName(){
        this.players.sort((a,b)=>a.name.localeCompare(b.name));
    }
    toString(){
        this.players.forEach(p=>{
            if(p.active){
                console.log(`Team Name: ${this.teamName} Name: ${p.name}`);
            }
        });

    }


}