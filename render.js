export { render }
import chalk from "chalk"
const cl = console.log
const ch = chalk

// renderer, works by passing through text, the renderer converts it to chalk colours by making the text invisible and colouring the background
// COLOUR CODES! use these codes to make an imiage with pixels USE IN LOWER CASE!!!!!!!!!!

let black = ("-")
let red = ("r")
let green = ("g")
let yellow = ("y")
let blue = ("b")
let magenta = ("m")
let cyan = ("c")
let white = ("w")
let grey = ("g")
let brightRed = ("t")
let brightGreen = ("h")
let brightYellow = ("u")
let brightBlue = ("n")
let brightMagenta = ("/")
let brightCyan = ("v")
let brightWhite = ("e")

// the colour codes above this line are the ones you need to use to get it to render, the vars below this line are used in the renderers code to define the actual colour values for chalk (how this uses colours on the terminal)


let ifError = false


let render = (line) => { //this is the funtion thats called from index.js, and line is the list of colour codes to be rendered
    let commandConstuct = ("console.log(") // this is the var for the console.log() command that will be constructed in the loop below, dont worry that its a string or has one bracket, its ment to be like that
    let lineLength = line.length -1 //its what it says it is

    for (let i = 0; i <= lineLength; i++) { // this loop starts the command build proscess

        
        
        
        console.log(chalk.bgBlack.hidden("1"),chalk.bgWhite.hidden("1"))


        if (line.charAt(i) === black) {
            commandConstuct = commandConstuct + "chalk.bgBlack.hidden('1'),"

        }

        if (line.charAt(i) === red) {
            commandConstuct = commandConstuct + "chalk.bgRed.hidden('1'),"

        }
       
        if (line.charAt(i) === green) {
            commandConstuct = commandConstuct + "chalk.bgGreen.hidden('1'),"

        }

        if (line.charAt(i) === yellow) {
            commandConstuct = commandConstuct + "chalk.bgYellow.hidden('1'),"

        }

        if (line.charAt(i) === blue) {
            commandConstuct = commandConstuct + "chalk.bgBlue.hidden('1'),"

        }

        if (line.charAt(i) === magenta) {
            commandConstuct = commandConstuct + "chalk.bgMagenta.hidden('1'),"

        }

        if (line.charAt(i) === cyan) {
            commandConstuct = commandConstuct + "chalk.bgCyan.hidden('1'),"

        }

        if (line.charAt(i) === white) {
            commandConstuct = commandConstuct + "chalk.bgWhite.hidden('1'),"

        }

        if (line.charAt(i) === grey) {
            commandConstuct = commandConstuct + "chalk.bgGrey.hidden('1'),"

        }

        if (line.charAt(i) === brightRed) {
            commandConstuct = commandConstuct + "chalk.bgRedBright.hidden('1'),"

        }

        if (line.charAt(i) === brightGreen) {
            commandConstuct = commandConstuct + "chalk.bgGreenBright.hidden('1'),"

        }

        if (line.charAt(i) === brightYellow) {
            commandConstuct = commandConstuct + "chalk.bgYellowBright.hidden('1'),"

        }

        if (line.charAt(i) === brightBlue) {
            commandConstuct = commandConstuct + "chalk.bgBlueBright.hidden('1'),"

        }

        if (line.charAt(i) === brightMagenta) {
            commandConstuct = commandConstuct + "chalk.bgMagentaBright.hidden('1'),"

        }

        if (line.charAt(i) === brightCyan) {
            commandConstuct = commandConstuct + "chalk.bgCyanBright.hidden('1'),"

        }

        if (line.charAt(i) === brightWhite) {
            commandConstuct = commandConstuct + "chalk.bgWhiteBright.hidden('1'),"

        }
       


        console.log(i)


    }

    if (ifError === false) {
        
    }
    commandConstuct = commandConstuct + "chalk.bgWhite.white('1'))"
    console.log(commandConstuct)
    eval(commandConstuct)
    
    console.log("\n\n\n\n\n\n\n\n\n\n")

 

}