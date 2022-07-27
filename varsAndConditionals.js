/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let johnSnowAttack = 35
let carrieAttack = 40

// if (johnSnowAttack > carrieAttack ) {
//     console.log ('Jon has better attack')

// } else {
//     console.log('Carrie has better attack')
// }
if (johnSnowAttack > carrieAttack) {
    console.log ('Jon has better attack')
} else if (carrieAttack > johnSnowAttack) {
    console.log('Carrie is better')
} else {
    console.log('Jon and Carrie has the same attack')
}

let jonHealth = 100
let johnDefense = 0

if (jonHealth <= carrieAttack) {
    console.log ('Jon has been slain')
} else {
    jonHealth = jonHealth - carrieAttack 
     // -= would also work jonhealth -= carrieattack
    console.log (`Jon Snow's health is down to ${jonHealth}`)
}

johnDefense += 25 
// Same as jondefense = jondefense + 25

if(jonHealth <= carrieAttack - johnDefense){
     console.log('Jon has been slain')
} else{
     console.log(`Jon's health is down to ${jonHealth}`)
}