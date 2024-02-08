const container = document.querySelector('.container')

const fetchData = async ()=>{ //asynchronous
    const response = await fetch('https://rickandmortyapi.com/api/character') //fetch response
    const data = await response.json() //convert the response items to json format

    data.results.forEach((character)=>{
        console.log(character)
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <h2>${character.name}</h2>
            <img src='${character.image}'/>
        `
        const episode = fetchEp(character)
        fetchEpisode(episode, card)
        container.appendChild(card)
    })
}

const fetchEp =  (character) => {
    const ep =  character.episode[0];
    return ep
};
const fetchEpisode = async (url, card)=>{
    const response = await fetch(url)
    const data = await response.json()
    const text = document.createElement('p')
    text.innerText = data.name
    card.appendChild(text)    
}

fetchData()