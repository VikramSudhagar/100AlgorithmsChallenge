export function addTwoDigits(n: any): number {

    const secondDigit = n%10;

    const firstDigit = (n - secondDigit)/10;

    return firstDigit + secondDigit;
}

console.log(addTwoDigits(29));


//Instructors Solution 

// export function addTwoDigits(n: any): number {

//     const nums = n.toString().split('');

//     return nums.reduce((a: string, b: string) => {
//         return parseInt(a + b);
//     })
    
// }
