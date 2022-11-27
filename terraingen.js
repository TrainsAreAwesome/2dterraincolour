export { terrainGen }


let terrainAmount = 100

function RNG(RNGMax) // random number gen
{
    return Math.floor(Math.random() * RNGMax);
}

let howMuchTerrainToMake = 10 //change how much terrain to make, dont put to 9999999999999999999
let randomNumber = RNG(10)

// the array witch stores the actual terrain
// things witch decide what peice of terrain to generate next




let terrain0 = ("_")




// TERRAIN RNG 

// FROM FLAT
let flatFromFlat = [1, 7]
let waterFromFlat = [8]
let hillUpFromFlat = [9]
let hillDownFromFlat = [10]

//FROM WATER
let waterFromWater = [1, 7]
let flatFromWater = [8]
let hillUpFromWater = [9]
let hillDownFromWater = [10]

//FROM HILL UP
let hillUpFromHillUp = [1, 7]
let flatFromHillup = [8]
let waterFromHillUp = [9]
let hillDownFromHillUp = [10]

//FROM HILL DOWN
let hillDownFromHillDown = [1, 7]
let hillUpFromHillDown = [8]
let flatFromHillDown = [9]
let waterFromHillDown = [10]



// terrain gen funtion
let terrainGen = () => {
    
    let currentXCoord = 0
    let currentYCoord = 0
    
    let previousXCoord = 0
    let previousYCoord = 0

    // about that variable, for some reason i didnt work (said it was undifined) so i just made that (FOR THIS FUNCTION ONLY)
    let loopNumber = 0
    while (loopNumber <= terrainAmount) {
        
        console.log("test")
        
        
        
        loopNumber++
    }
}
    terrainGen()


