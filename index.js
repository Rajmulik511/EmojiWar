let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {
    let num = Math.floor(Math.random()*fighters.length)
    let num1 = Math.floor(Math.random()*fighters.length)
    stageEl.textContent=(fighters[num]+" Vs "+fighters[num1])
})
