const { readFile } = require('./fileService')
const geolib = require('geolib');

const calculateRecommendations = (cartContent) => {
    //Example of cartContent data structure
    // [
    //   {name: 'milk', quantity: 2},
    //   {name: 'cheese', quantity: 4}
    // ]

    const fileContent = readFile('./constants/shops.json');
    const userStaticLocationInfo = readFile('./constants/myPosition.json');
    let result = []
    for(const shop of fileContent.shops) {
        let shopRecommendations = {
            brand: shop.brand,
            logoUrl: shop.logoUrl,
            basketSumPrice:0,
            location: shop.location
        }
        // Calculate the basket sum price
        for(const cartItem of cartContent) {
            const shopProduct = shop.products.find(product => product.name === cartItem.name)
            if(shopProduct) {
                shopRecommendations.basketSumPrice += shopProduct.price * cartItem.quantity
            }
        }

        //Calcualte the distance of user and shops
        const userShopDistance = geolib.getDistance(shop.location, userStaticLocationInfo);
        shopRecommendations.distance = userShopDistance;
        result.push(shopRecommendations);
    }
    return result;
}

module.exports.calculateRecommendations = calculateRecommendations;
