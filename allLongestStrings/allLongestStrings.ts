export function allLongestStrings(inputArray: string[]): string[] {
    //two pointer method

    var biggestLength: number = 0;

    let i = 0; 
    let j = inputArray.length - 1;
    console.log(j)
    console.log(i)
    var answer: string[] = [];

    while (i < j) {

        if(inputArray[i].length > biggestLength) {
            biggestLength = inputArray[i].length;
        }

        if(inputArray[j].length > biggestLength) {
            biggestLength = inputArray[j].length;
        }
        j--;
        i++;
    }

    console.log(biggestLength)
    console.log(inputArray[0])

    let m = 0;
    let k = 0;
    for(k ; k < inputArray.length; k++) {
        if(inputArray[k].length === biggestLength) {
            answer[m] = inputArray[k];
            m++;
        }
    }

    return answer;
    

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));