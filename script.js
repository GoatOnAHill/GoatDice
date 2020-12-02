// console.log("Hello, World!")

// let best = "Goat"
// console.log(`The best is ${best}.`)

// const myFunction = () => {
//     console.log("Goats.")
// }

// myFunction()

// let goat1 = "GoatGoat"
// let goat2 = "GoatGoatGoatGoat"

// const otherFunction = (goat1, goat2) => {
//     console.log(`${goat1}, ${goat2}`)
// }

// otherFunction(goat1, goat2)

// let goats = ["Gote", "Gott", "Gaot", "Goat"]

// console.log (goats[2])

//const myDiv = document.getElementsByClassName('myDiv')[0]

// myDiv.style.backgroundColor = "blue"
// myDiv.style.width = "600px"

// myDiv.addEventListener('mousedown', () => {
//     myDiv.style.backgroundColor = 'green'
//     console.log("Goats are cool.")
// })

// myDiv.addEventListener('mouseup', () => {
//     myDiv.style.backgroundColor = 'blue'
// })

// const button = document.getElementById('goatbutton')
// const heading = document.getElementById('heading')

const myImage = document.getElementById('myImage')
const Score = document.getElementById('score')
const Rolls = document.getElementById('rolls')
const Wins = document.getElementById('wins')
const rollDice = document.getElementById('rolldice')

let currentScore = 0
let currentRolls = 0
let currentWins = 0

const diceRoll = () => {
    console.log("Bleat")
    let randNum = Math.ceil(Math.random() * 6)
    currentScore += randNum
    currentRolls++
    console.log(randNum)
    console.log(`Score = ${currentScore}`)
    console.log(`Rolls = ${currentRolls}`)
    Score.textContent = `Score = ${currentScore}`
    Rolls.textContent = `Rolls = ${currentRolls}`
    Wins.textContent = `Wins = ${currentWins}`
    myImage.src = "./Images/Dice" + randNum + ".png"

    if(currentScore == 21){
        console.log("You the Gote")
        Score.textContent = `You the Gote in ${currentRolls} turns.`
        currentWins++
        currentScore = 0
        currentRolls = 0
        myImage.src = "./Images/DiceRoll.png"
    }
    else if(currentScore > 21 || randNum == 1){
        console.log("You lose bleat bleat")
        Score.textContent = `You lost in ${currentRolls} turns bleat bleat.`
        currentScore = 0
        currentRolls = 0
        myImage.src = "./Images/DiceRoll.png"
    }
}

rollDice.addEventListener('mousedown', diceRoll)
myImage.src