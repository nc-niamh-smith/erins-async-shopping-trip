const utils = require("./utils")

function erinsGroceryShop() {
    const completedTasks = []
    return utils.cashCheque()
    .then((chequeResult) => {
        completedTasks.push(chequeResult)
        return completedTasks
    })
}

module.exports = {erinsGroceryShop}

//she needs to write a shopping list
//erin needs to cash a cheque
//she needs to go to the shop