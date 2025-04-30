import { sum } from "../sum";
test("sum function should be calculate the sum of two numbers",()=>{
    const result = sum(4,6);
    //Assertion
    expect(result).toBe(10);
});