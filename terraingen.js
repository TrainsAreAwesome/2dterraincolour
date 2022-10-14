export { terrainGen }

function RNG(RNGMax) // random number gen
{
    return Math.floor(Math.random() * RNGMax);
}

let howMuchTerrainToMake = 10 //change how much terrain to make, dont put to 9999999999999999999
let randomNumber = RNG(10)

// the array witch stores the actual terrain

let terrain =
    [

    ]

let terrainRNG = //the terrain RNG array, this stores the chances of what piece of terrain gets generated after the previous piece
    [
        fromFlat = [ //chances of any peice of terrain generating when the previous piece of terrain is flat

            flatFromFlat === 0, 7,
            waterFromFlat === 8,
            hillUpFromFlat === 9,
            hillDownFromFlat === 10
        ]



    ]



// terrain gen funtion
let terrainGen = () => {


    // things witch decide what peice of terrain to generate next







}
    
    
}




terrainGen()



