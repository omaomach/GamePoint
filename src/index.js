//...{o_o}...//
let list = document.querySelector('ul')

function getGameName() {
    fetch('http://localhost:3000/game')
    .then((res) => res.json())
    .then((data) => {
        list.innerHTML = data.map(list => {
            return `<li>${list.name}</li>`
        }).join('')
    })

}

function getGamePoster() {
    fetch('http://localhost:3000/game')
    .then((res) => res.json())
    .then((data) => {
        let mainGamePoster = document.getElementById('selectedGameImage')
        // let availableGamesList = document.querySelector('li')
        list.addEventListener('click', () => {
            data.map(game => {
                mainGamePoster.innerHTML = `<img src="${game.poster}">`
            })
            
        })
    })

}


function initialize() {
    getGameName()
    getGamePoster()
}

initialize()

//...{o_<}...//