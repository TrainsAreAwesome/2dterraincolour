export { render }
import chalk from "chalk"
const cl = console.log
const ch = chalk

// renderer, works by passing through text, the renderer converts it to chalk colours by making the text invisible and colouring the background
// COLOUR CODES! use these codes to make an imiage with pixels USE IN LOWER CASE!!!!!!!!!!

let aqua = ("a")
let black = ("-")
let blue = ("b")
let pink = ("=")
let grey = ("g")
let green = ("h")
let lime = ("l")
let maroon = ("m")
let navy = ("n")
let olive = ("o")
let purple = ("p")
let red = ("r")
let silver = ("s")
let teal = ("t")
let white = ("w")
let yellow = ("y")

// the colour codes above this line are the ones you need to use to get it to render, the vars below this line are used in the renderers code to define the actual colour values for chalk (how this uses colours on the terminal)

let aquaColour = chalk.hex("#00ffff")
let blackColour = chalk.hex("#000000")
let blueColour = chalk.hex("#0000ff")
let pinkColour = chalk.hex("#ff00ff")
let greyColour = chalk.hex("#808080")
let greenColour = chalk.hex("#008000")
let limeColour = chalk.hex("#00ff00")
let maroonColour = chalk.hex("#800000")
let navyColour = chalk.hex("#000080")
let oliveColour = chalk.hex("#808000")
let purpleColour = chalk.hex("#800080")
let redColour = chalk.hex("#ff0000")
let silverColour = chalk.hex("#c0c0c0")
let tealColour = chalk.hex("#008080")
let whiteColour = chalk.hex("#ffffff")
let yellowColour = chalk.hex("#ffff00")

let noColour = 0 //this var checks if there is no colour code being used, if none are being used (checks every pixel) it will throw an error on the terminal


let ifError = false


let render = (line) => { //this is the funtion thats called from index.js, and line is the list of colour codes to be rendered
    let commandConstuct = ("console.log(chalk.hidden,") // this is the var for the console.log() command that will be constructed in the loop below, dont worry that its a string or has one bracket, its ment to be like that
    let lineLength = line.length -1 //its what it says it is

    for (let i = 0; i <= lineLength; i++) { // this loop starts the command build proscess

        noColour = 0

        console.log(redColour(1), redColour(1))


        if (line.charAt(i) === aqua) {
            commandConstuct = commandConstuct + "aquaColour(1),"

        }


        else {
            noColour++
        }
        if (line.charAt(i) === black) {

            commandConstuct = commandConstuct + "blackColour(1),"

        } else {

            noColour++
        }
        if (line.charAt(i) === blue) {

            commandConstuct = commandConstuct + "blueColour(1),"

        } else {

            noColour++
        }



        if (line.charAt(i) === pink) {

            commandConstuct = commandConstuct + "pinkColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === grey) {

            commandConstuct = commandConstuct + "greyColour(1),"

        } else {
            noColour++
        }



        if (line.charAt(i) === green) {

            commandConstuct = commandConstuct + "greenColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === lime) {

            commandConstuct = commandConstuct + "limeColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === maroon) {

            commandConstuct = commandConstuct + "maroonColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === navy) {

            commandConstuct = commandConstuct + "navyColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === olive) {

            commandConstuct = commandConstuct + "oliveColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === purple) {

            commandConstuct = commandConstuct + "purpleColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === red) {

            commandConstuct = commandConstuct + "redColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === silver) {

            commandConstuct = commandConstuct + "silverColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === teal) {

            commandConstuct = commandConstuct + "tealColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === white) {

            commandConstuct = commandConstuct + "whiteColour(1),"

        } else {
            noColour++
        }


        if (line.charAt(i) === yellow) {

            commandConstuct = commandConstuct + "yellowColour(1),"

        } else {
            noColour++
        }


        console.log(i)

        if (noColour >= 15) {
            console.log("ERROR!!! NO COLOUR CODE USED (on at least one char)! CHECK YOUR CODE!")
            ifError = true

        }


    }

    if (ifError === false) {
        
    }
    commandConstuct = commandConstuct + "chalk.bgWhite,chalk.white(1))"
    console.log(commandConstuct)
    eval(commandConstuct)
    
    console.log("\n\n\n\n\n\n\n\n\n\n")

   console.log(chalk.hidden,redColour(1),redColour(1),redColour(1),redColour(1),redColour(1),chalk.bgWhite,chalk.white(1))

}