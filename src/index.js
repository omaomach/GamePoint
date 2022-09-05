//...{o_o}...//
function gameInfo(id) {
    fetch(`https://serene-beach-71619.herokuapp.com/game/${id}`)
    .then((res) => res.json())
    .then((data) => {
        document.getElementById('gameDescription').innerHTML = data.description
        document.getElementById('selectedGameImage').innerHTML = `<img src="${data.poster}">`
        document.getElementById('name').innerHTML = `<h3>${data.name}</h3>`
        document.getElementById('reviewList').innerHTML = data.reviews.map((review) => `<li>${review.content}</li>`).join('')
    })
}

function getGameNames() {
    fetch('https://serene-beach-71619.herokuapp.com/game')
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
        fetch('https://serene-beach-71619.herokuapp.com/game', {
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

function getCards() {
    fetch('https://serene-beach-71619.herokuapp.com/cards')
    .then((res) => res.json())
    .then((data) => {
        let cards = document.getElementById('imageCards')
        cards.innerHTML = data.map(card => {
            return `<img src="${card.poster}">`
        }).join('')
    })

}

function postReview() {
    const inputForm2 = document.querySelector('#inputForm2')
    inputForm2.addEventListener('submit', (e) => {
        e.preventDefault()
        let usergameReview = document.getElementById('userGameReview').value
        fetch('https://serene-beach-71619.herokuapp.com/game', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                content: usergameReview
            })
        })
        .then((res) => res.json())
        .then((data) => console.log(data))

    })
}

document.addEventListener('DOMContentLoaded', () => {
    gameInfo(1)
    getGameNames()
    postGame()
    getCards()
    postReview()
})

//...{o_<}...//