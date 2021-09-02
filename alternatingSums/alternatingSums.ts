export function alternatingSums(a: number[]): number[] {

    var teamOne: number = 0;
    var teamTwo: number = 0;

    for(let i = 0; i < a.length; i++) {

        if(i % 2 == 0) {
            teamOne = a[i] + teamOne;
        } else {
            teamTwo = a[i] + teamTwo;
        }

    }

    var answer: number[] = [teamOne, teamTwo];

    return answer;

}

console.log(alternatingSums([50, 60, 60, 45, 70]))