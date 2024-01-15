const fs = require('fs/promises');

const utils = {

    cashCheque: () => {
        return fs.readFile('./data/cheque.txt').then((content) => {
            return content.toString()
        })
    },
    goToTheShop: () => {
        return fs.readFile('./data/shop.txt').then((content) => {
            return content.toString()
        })
    },
    writeShoppingList: () => {
        return fs.readFile('./data/list.txt').then((content) => {
            return content.toString()
        })
    }
}



module.exports = utils;