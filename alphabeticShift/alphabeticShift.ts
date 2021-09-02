export function alphabeticShift(inputString: string): string {

    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var answer: string = '';

    for(let i = 0; i < inputString.length; i++) {
        if(inputString[i] == 'z'){
            var index = 0;
        } else {
            var index = alphabet.indexOf(inputString[i]) + 1;
        }
        answer = answer.concat(alphabet[index]);
    }
    return answer;
}

console.log(alphabeticShift('crazy'));