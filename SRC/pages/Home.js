/* import getData from "./utils/getData" */

const Home = async (products) => {

    const getProducts = await getData()

    const view = ` 

       <div class = "product">
        ${getProducts.map (product =>`
            <article class = "product-items">
                <a href = "#/${product.id}/">
                    <img src = "${product.img.url}" alt= "${product.img}" 
                    <h2>${product.name}</h2>
                </a>
            </article>
            `).join('')} /* esto genera un bloque de html que debemos unir y lo hacemos con un join */
            
       </div>
    `
    return view
}

export default Home; 