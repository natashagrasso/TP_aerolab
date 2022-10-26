const API = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzI1MGE2NzAwYjgyZjAwMWExZTUwZmMiLCJpYXQiOjE2NjMzNzE4Nzl9.IqRgLmpC8TwY5Qj2JURWZ-1apa-vc8gumTQCqFdNFo4';
const URL = 'https://coding-challenge-api.aerolab.co/products';

const getData = async (id) => {
    const apiURL = id ?  `${API} ${id}` : URL
    console.log(apiURL)

    try {
        const response = await fetch (apiURL)
        const data = response.json();
        console.log(data)
        return data;
    } catch(error){
        console.log('fetch error!', error)
    };
};

export default getData;