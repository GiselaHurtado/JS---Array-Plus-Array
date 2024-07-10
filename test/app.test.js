import { describe, expect, it } from "vitest";
import { arrSum } from "../app.js";

describe('Get the sum of two matrices/arrays', () => {
   
    it('should add all the elements of the arrays', () => {
        const arr1 = [1, 2, 3]
        const arr2 = [4, 5, 6]
        const expected = 21;

        const result = arrSum(arr1, arr2);

        expect(result).toBeTypeOf("number");
        expect(result).toEqual(expected);

    });


    it('should add all the elements of the arrays', () => {
        const arr1 = [-1, -2, -3]
        const arr2 = [-4, -5, -6]
        const expected = -21;
    
        const result = arrSum(arr1, arr2);
    
        expect(result).toBeTypeOf("number");
        expect(result).toEqual(expected);
    
    });


    it('should add all the elements of the arrays', () => {
        const arr1 = [0, 0, 0]
        const arr2 = [4, 5, 6]
        const expected = 15;
    
        const result = arrSum(arr1, arr2);
    
        expect(result).toBeTypeOf("number");
        expect(result).toEqual(expected);
    
    });

    it('should add all the elements of the arrays', () => {
        const arr1 = [100, 200, 300];
        const arr2 = [400, 500, 600];
        const expected = 2100;
    
        const result = arrSum(arr1, arr2);
    
        expect(result).toBeTypeOf("number");
        expect(result).toEqual(expected);
    
    });

    it('should throw an error if any element is not an integer', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, '6']; 

       
        expect(() => arrSum(arr1, arr2)).toThrow('One or more elements are not integers.');
    });

    it('should throw an error if arrays contain non-integer elements', () => {
        const arr1 = [1.5, 2, 3]; 
        const arr2 = [4, 5, 6];

       
        expect(() => arrSum(arr1, arr2)).toThrow('One or more elements are not integers.');
    });

    
});




