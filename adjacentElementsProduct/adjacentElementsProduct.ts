export function adjacentElementsProduct(inputArray: number[]): number {

    var productValue : number = Number.MIN_VALUE;

    let j = 0;

    for(let i = 1; i < inputArray.length; i++) {
        
        if(inputArray[i] * inputArray[j] > productValue) {
            productValue = inputArray[i] * inputArray[j];
        }

    }

    return productValue;

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));