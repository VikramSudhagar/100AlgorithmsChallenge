export function alphabetSubsequence(s: string): boolean {

    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    for(let i = 1; i < s.length; i++) {
        if((alphabet.indexOf(s[i]) < alphabet.indexOf(s[i-1])) || (alphabet.indexOf(s[i]) == alphabet.indexOf(s[i-1]))) {
            return false;
        }

    }

    return true;

}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
