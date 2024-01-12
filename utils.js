const fs = require('fs/promises');

const utils = {

    cashCheque: async () => {
        return fs.readFile('./data/cheque.txt').then((content) => {
            return content.toString()
        })
    },
    goToTheShop: async () => {
        return fs.readFile('./data/shop.txt').then((content) => {
            return content.toString()
        })
    },
    writeShoppingList: async () => {
        return fs.readFile('./data/list.txt').then((content) => {
            return content.toString()
        })
    }
}



module.exports = utils