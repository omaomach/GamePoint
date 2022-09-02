// //...{o_o}...//
function gameInfo(id) {
    fetch(`https://git.heroku.com/fakejsonapi254.git${id}`)
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('gameDescription').innerHTML = data.description
        document.getElementById('selectedGameImage').innerHTML = `<img src="${data.poster}">`
        document.getElementById('name').innerHTML = `<h3>${data.name}</h3>`
        document.getElementById('reviewList').innerHTML = data.reviews.map((review) => `<li>${review.content}</li>`).join('')
    })
}

function getGameNames() {
    fetch('https://git.heroku.com/fakejsonapi254.git')
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('list').innerHTML = data.map((game) => `<li onClick="gameInfo(${game.id})">${game.name}</li>`).join('')
    })
}

function postGame() {
    const inputForm1 = document.querySelector('form')
    inputForm1.addEventListener('submit', (e) => {
        e.preventDefault()
        let game = document.getElementById('gameName').value
        let desc = document.getElementById('gameDesc').value
        let url = document.getElementById('gameImageUrl').value
        fetch('https://git.heroku.com/fakejsonapi254.git', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                name: game,
                description: desc,
                poster: url 
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
        
    })

}

// function postReview() {
//     const inputForm2 = document.querySelector('#inputForm2')
//     inputForm2.addEventListener('submit', (e) => {
//         e.preventDefault()
//         let usergameReview = document.getElementById('userGameReview').value
//         fetch('http://localhost:3000/reviews', {
//             method: 'POST',
//             headers: {
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 gameName: gameInfo,
//                 content: usergameReview
//             })
//         })
//         .then((res) => res.json())
//         .then((data) => console.log(data))

//     })
// }

document.addEventListener('DOMContentLoaded', () => {
    gameInfo(1)
    getGameNames()
    postGame()
    // postReview()
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