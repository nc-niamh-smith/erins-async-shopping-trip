const {erinsGroceryShop} = require('./callbacks.js')
const utils = require('../utils.js');


describe('erinsGroceryShop', () => {
    describe('cashCheque', () => {
        test('when invoked, should invoke cashCheque', () => {
            const mockCheque = jest.spyOn(utils, 'cashCheque')
    
            return erinsGroceryShop().then(() => {
                expect(mockCheque).toHaveBeenCalled();
            });
        });
        test('should return an array with a string saying the cheque has been cashed', () => {
            return erinsGroceryShop().then((result) => {
                expect(Array.isArray(result)).toBe(true);
                expect(result).toContain('cheque has been cashed');
            });
        });
    })
    describe('goToTheShop', () => {
        test('when invoked, should invoke goToTheShop', () => {
            const mockShop = jest.spyOn(utils, 'goToTheShop')

            return erinsGroceryShop().then(() => {
                expect(mockShop).toHaveBeenCalled();
            })
        })
        test('should return an array containing a string confirming the shop has been completed', () => {
            return erinsGroceryShop().then((result) => {
                expect(result).toContain('shop complete')
            })
        })
    })
    describe('write a shoppingList', () => {
        test('when invoked, should invoke writeShoppingList', () => {
            const mockList = jest.spyOn(utils, 'writeShoppingList')

            return erinsGroceryShop().then(() => {
                expect(mockList).toHaveBeenCalled();
            });
        });
        test('should return an array containing a string confirming the list has been written', () => {
            return erinsGroceryShop().then((result) => {
                expect(result).toContain('shopping list written');
            });
        });
    });
});