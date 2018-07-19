//import Fighter class
import Fighter from './fighter';

export interface IImprovedFighter {
    doubleHit(enemy: Fighter, point: number): void;
}

// Create class ImprovedFighter
export default class ImprovedFighter extends Fighter implements IImprovedFighter {
    //default improved fighter is the Thanos
    constructor(name = 'Thanos', health = 99999999, power = 1000) {
        super(name, health, power);
    }

    doubleHit(enemy: Fighter, point = 0) {
        super.hit(enemy, 2 * point);
    }
}

