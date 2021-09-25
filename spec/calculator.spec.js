const add=require('../calculator.js')
describe("Calculator Test Suite ", function() {
    describe("Add function test", function() {
        it("Assert True", function() {
          const result=add(10,20);
          expect(result).toBe(300);
        });
      });
});