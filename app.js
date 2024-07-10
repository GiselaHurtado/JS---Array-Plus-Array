export function arrSum(arr1, arr2) { 
    let sumaTotal = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      if (Number.isInteger(arr1[i]) && Number.isInteger(arr2[i])) {
      sumaTotal += arr1[i] + arr2[i];
     } else {
      throw new Error('One or more elements are not integers.');
  }
    }
    return sumaTotal;
  }

 
console.log(arrSum([1, 2, 3], [4, 5, 6]));
console.log(arrSum([-1, -2, -3], [-4, -5, -6]));
console.log(arrSum([0, 0, 0], [4, 5, 6]));
console.log(arrSum([100, 200, 300],[400, 500, 600]));