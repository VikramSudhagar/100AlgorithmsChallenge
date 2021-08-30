export function absoluteValuesSumMinimization(a: number[]): number {

    let answer = 0;

    if(a.length % 2 !== 0){
        //odd
        return answer = a[Math.floor((a.length)/2)];
    } else {
        return a[(a.length)/2 - 1];
    }
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));