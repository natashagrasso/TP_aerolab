import Header from '../templates/Header';
import Home from '../pages/Home';
import Error404 from '../pages/Error404'
import Products from '../pages/products';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';
import getData from '../utils/getData';

const routes = {
    '/': Home,
    '/:id':Products,
    '/contact':"Contact"
};

const router = async () => {
    const products = await getData
    const header = null ||  document.getElementById('header');
    const content = null ||  document.getElementById('content');

    header.innerHTML= await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render(Products);

};

export default router;