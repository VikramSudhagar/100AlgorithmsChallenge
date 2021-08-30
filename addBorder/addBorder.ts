export function addBorder(picture: string[]): string[] {

    const border = picture[0].length + 2;

    var wall: string = "";

    wall = '*'.repeat(border);

    for(let j = 0; j < picture.length; j++) {
        picture[j] = '*'.concat(picture[j], "*"); 
    }

    picture.push(wall)
    picture.unshift(wall);

    return picture;

}

console.log(addBorder(["abc", "ded"]));