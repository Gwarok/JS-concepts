const fetchData = require('./data.json')

const displaydata = ()=>{
fetchData.products.forEach((product)=>{
    console.log(product.title)
        
})
}
displaydata()

