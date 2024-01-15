const utils = require("../utils")

function erinsGroceryShop() {
    const completedTasks = []

    return utils.cashCheque()
    .then((chequeResult) => {
        completedTasks.push(chequeResult)
        return completedTasks;
    })

}

module.exports = {erinsGroceryShop}