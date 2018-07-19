// import Fighter class and ImprovedFighter class
import Fighter from './fighter';
import ImprovedFighter from './improvedFighter';


//async function fight, use rest operator
async function fight(fighter: Fighter, improvedFighter: ImprovedFighter, ...points: number[]) {

  let fightResult, countHits = points.length;

  //let's fight
  for (let hitNumber = 0; hitNumber < countHits; hitNumber++) {
    if (hitNumber % 2 === 0) {
      //fighter hit improved fighter
      fighter.hit(improvedFighter, points[hitNumber]);
      if (isInKnockout(improvedFighter)) {
        //improvedFighter is in knockout: await promise resolve and break
        fightResult = await improvedFighter.knockout();
        break;
      }
    }
    else {
      //improved fighter hit fighter
      improvedFighter.doubleHit(fighter, points[hitNumber]);
      if (isInKnockout(fighter)) {
        //fighter is in knockout: await promise resolve and break
        fightResult = await fighter.knockout();
        break;
      }
    }
  }

  if (!fightResult) {
    //if the fight ended without knockout: assign healthes to fight result
    fightResult = `The fight ended without knockout!
      ${fighter.Name} health: ${fighter.Health}
      ${improvedFighter.Name} health: ${improvedFighter.Health}`;
  }

  //console print the fight result
  console.log(fightResult);
}



// //verifying function  -  is the fighter in knockout?
function isInKnockout(fighter: Fighter): Boolean {
  if (fighter.Health == 0) {
    console.log(`${fighter.Name} is in knockout!`);
    return true;
  }
  return false;
}


// //export async function fight
export { fight };