import Error404 from "./Error404";
import getProducts from "../utils/getProducts";

const Products = async () => {

    /* const id = getHash() */
    const products = await getProducts(id);
    console.log(products)

    const view = products`

         <div class = "Products-inner">
            <article class = "Products-card">
                <img src = "${products.image.hdurl}" alt = "${products.name}">  
                <h2>${products.name}</h2>
            </rticle>

            <article class = "Products-card">

            <h3> category: <span>${products.category}</span></h3>
            <h3>Precio: <span>${products.cost}</span></</h3>
            
            </article>
        </div>  
        `
        Error404()
    return view
};   

export default Products;