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

// the colour codes above this line are the ones you need to use to get it to render, the vars below this line are used in the renderers code to define the actual colour values for chalk



let noColour = 0 //this var checks if there is no colour code being used, if none are being used (checks every pixel) it will throw an error on the terminal




let render = (line) => {
    let commandConstuct = (console.log()) // this is the var for the console.log() command that will be constructed in the loop below
    let lineLength = line.length //its what it says it is

    for (let i = o; i <= lineLength; i++) { // this loop checks what colour code is used for every char on a line and makes the console.log() command, it will throw an error if it detects that no code is used (checks every char)



        noColour = 0




        if (line.charAt(i) === aqua) {

        }


        else {
            noColour++
        }
        if (line.charAt(i) === black) {

        }
        else {
            noColour++
        }
        if (line.charAt(i) === blue) {

        }


        if (line.charAt(i) === pink) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === grey) {

        }

        else {
            noColour++
        }

        if (line.charAt(i) === green) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === lime) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === maroon) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === navy) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === olive) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === purple) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === red) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === silver) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === teal) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === white) {

        }
        else {
            noColour++
        }

        if (line.charAt(i) === yellow) {

        }
        else {
            noColour++
        }

        if (noColour <= 15) {
            console.log("ERROR!!! NO COLOUR CODE USED (on at least one char)! CHECK YOUR CODE!")
        }


    }

}