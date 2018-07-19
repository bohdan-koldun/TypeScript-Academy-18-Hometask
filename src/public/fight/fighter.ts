// Create class Fighter

export interface IFighter {
    Name: string;
    Health: number;
    Power: number;
    setDamage(damage: number): void;
    hit(enemy: IFighter, point: number): void;
    knockout(): Promise<string>;
}

export default class Fighter implements IFighter {

    protected _name: string;
    protected _health: number;
    protected _power: number;

    //default fighter is the Tony Stark
    constructor(name = 'Tony Stark', health = 9999, power = 100) {
        this.Name = name;
        this.Health = health;
        this.Power = power;
    }


    public setDamage(damage = 0): void {
        this.Health = this.Health - damage;
        console.log(`${this.Name} health after damage: ${this.Health}!`);
    }

    public hit(enemy: Fighter, point = 0): void {
        let power = enemy.Power;
        let damage = point * power;
        enemy.setDamage(damage);
    }

    public knockout(): Promise<string> {
        return new Promise<string>(
            (resolve, reject) => {
                console.log('Time is over!');
                // after 0.5 second return resolve promise
                setTimeout(() => resolve(`${this.Name} lost the fight!`), 500);
            });
    }


    //geters and seters
    public get Name() {
        return this._name;
    }

    public set Name(value: string) {
        this._name = value;
    }

    public get Health() {
        return this._health;
    }

    public set Health(value: number) {
        //health can not be less than zero
        if (value >= 0) {
            this._health = value;
        }
        else {
            this._health = 0;
        }
    }
    public get Power() {
        return this._power;
    }

    public set Power(value: number) {
        //power can not be less than zero
        if (value >= 0) {
            this._power = value;
        }
        else {
            this._power = 0;
        }

    }

}