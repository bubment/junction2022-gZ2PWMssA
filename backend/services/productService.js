const { readFile } = require('./fileService')
const _ = require('lodash');

const getProductsByCategory = (categoryName) => {
    const fileContent = readFile('./constants/products.json');
    const actualCategory = fileContent.categories.find(category => category.name === categoryName)
    return actualCategory.products;
}

const getCategories = () => {
    const fileContent = readFile('./constants/products.json');
    return fileContent.categories.map(category => _.omit(category, 'products'));
}

module.exports.getProductsByCategory = getProductsByCategory;
module.exports.getCategories = getCategories;
