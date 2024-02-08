const API_Key = '1a5799ef9ead459bb3682426240802'
const baseURL ='https://www.weatherapi.com/docs/#'

const form = document.querySelector('.search-form')
const input = document.querySelector('.search-input')
let userinput = 'Nairobi'
form.addEventListener('submit',(e)=>{
    container.innerHTML=''
    e.preventDefault()
    userinput = input.value
    fetchweather()

    
})

const fetchweather = async()=>{
    const endpoint = `${baseURL}/current.json?key=$(API_Key)&q=${userinput}`
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)

    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML= `
        <div>
            <img src="${data.current.condition.icon}"
            <span>${data.current.condition.text}</span>
        </div>
        <h2>${data.location.country}</h2>
        <p>${data.location.name}</p>
        <p>${data.location.localtime}</p>
    
    `
    container.appendChild(card)

}