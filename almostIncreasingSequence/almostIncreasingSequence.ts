export function almostIncreasingSequence(sequence: number[]): boolean {

    //counts everytime there is an element which breaks the increasing sequence
    let counter = 0;
    let j = 0;

    for(let i = 1; i < sequence.length; i++){
        if((sequence[i] - 1) != sequence[j]) {
            counter++;
        }
    }

    if(counter > 1){
        return false;
    }

    return true;

}

console.log(almostIncreasingSequence([1, 3, 1, 2])) 
console.log(almostIncreasingSequence([1, 3, 2])) 