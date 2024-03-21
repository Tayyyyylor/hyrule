const json = require("./players.json")
const fs = require("fs")

const enemies = JSON.parse(fs.readFileSync(json, 'utf-8'))
console.log('enemies', enemies)


export const getEnemies = () => {
}

getEnemies()

export const getPlayers = () => {

}

export const getBosses = () => {

}