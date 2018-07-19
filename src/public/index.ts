import Fighter from './fight/fighter';
import ImprovedFighter from './fight/improvedFighter';
import { fight } from './fight/fight';

export default class Game {
    private fighter: Fighter;
    private improvedFighter: ImprovedFighter;

    constructor(_fighter: Fighter, _improvedFighter: ImprovedFighter) {
        this.fighter = _fighter;
        this.improvedFighter = _improvedFighter;
    }

    battle(...points: number[]): void {
        // call fight function, use spread operator
        fight(this.fighter, this.improvedFighter, ...points);
    }
}

//create fighter
let fighter = new Fighter('Steve Rogers', 9999, 135);

//create improved fighter- use default parameters
let fighterImproved = new ImprovedFighter();


//create game
const game = new Game(fighter, fighterImproved);


//create points array
let points = [12, 13, 19, 20, 19, 30, 19];


console.log("Battle №1\n\n");

//start batle 1, use spread operator
game.battle(...points);


console.log("\n\nBattle №2\n\n");

//reset fighter Healthes 
fighterImproved.Health = 1000000;
fighter.Health = 50000;

//start batle #2, use Type Assertion from string to number
game.battle(<number><any>'13', <number><any>'19', <number><any>'20', <number><any>'19');


