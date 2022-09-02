// //...{o_o}...//
function gameInfo(id) {
    fetch(`http://localhost:3000/game/${id}`)
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('gameDescription').innerHTML = data.description
        document.getElementById('selectedGameImage').innerHTML = `<img src="${data.poster}">`
        document.getElementById('name').innerHTML = `<h3>${data.name}</h3>`
    })
}

function getGameNames() {
    fetch('http://localhost:3000/game')
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('list').innerHTML = data.map((game) => `<li onClick="gameInfo(${game.id})">${game.name}</li>`).join('')
    })
}

function getGameCard() {
    fetch('http://localhost:3000/cards')
}

document.addEventListener('DOMContentLoaded', () => {
    gameInfo(1)
    getGameNames()
})

// const list = document.querySelector('ul')

// function getGameName() {
//     fetch('http://localhost:3000/game')
//     .then((res) => res.json())
//     .then((data) => {
//         list.innerHTML = data.map(list => {
//             return `<li>${list.name}</li>`
//         }).join('')
//     })

// }

// function getGamePoster() {
//     fetch('http://localhost:3000/game')
//     .then((res) => res.json())
//     .then((data) => {
//         const mainGamePoster = document.getElementById('selectedGameImage')
//         // let availableGamesList = document.querySelector('li')
//         list.addEventListener('click', () => {
//             data.map(game => {
//                 mainGamePoster.innerHTML = `<img src="${game.poster}">`
//             })
            
//         })
//     })

// }

// function getDisplayGameName() {
//     fetch('http://localhost:3000/game')
//     .then((res) => res.json())
//     .then((data) => {
//         const name = document.getElementById('name')
//         list.addEventListener('click', () => {
//             data.map((game) => {
//               name.innerHTML = `<h3>${game.name}</h3>`  
//             })
//         })
//     })
// }

// function getDisplayGameDescription() {
//     fetch('http://localhost:3000/game')
//     .then((res) => res.json())
//     .then((data) => {
//         const description = document.getElementById('gameDescription');
//         list.addEventListener('click', () => {
//             data.map((game) => {
//                 description.innerHTML = `<h5>${game.description}</h5>`
//             })
//         })
//     })
// }


// //...{o_<}...//