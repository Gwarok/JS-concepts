let container= document.querySelector('.container')

const fetchdata = async ()=>{
    const response= await fetch('https://rickandmortyapi.com/api/character')
    const data = await response.json()
    const characters= data.results

    characters.forEach((character)=>{
        console.log(character.name)
        const card =document.createElement('div')
        card.classList.add('card')
        card.innerHTML=`
            <div>
                <img src="${character.image}" />
            </div>
            <p>${character.name}</p>
        `
        container.appendChild(card)
    })

}
fetchdata()

