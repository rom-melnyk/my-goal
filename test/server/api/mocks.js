const dictionary = `
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32
`.split(/\s+/).filter(v => !!v);

function random(a, b) {
    return Math.floor(
        a + Math.random() * (b - a)
    );
}

function getRandomWords(number) {
    return Array(number)
        .fill(0)
        .map(() => dictionary[ random(0, dictionary.length) ])
        .join(' ');
}


const CAMPAIGNS = [
    { id: 0, name: 'Campaign one', description: getRandomWords( random(10, 90) ), steps: [ 0, 1, 3, 8, ] },
    { id: 1, name: 'Camp twenty 2', description: getRandomWords( random(10, 90) ), steps: [ 2, 3, 1, ] },
    { id: 2, name: 'Campaign 3 33 camp 333', description: getRandomWords( random(10, 90) ), steps: [ 4, 6, 7, 8, 9, ] },
];


const STEPS = [
    { id: 0, name: 'Step one', description: getRandomWords( random(5, 20) ), },
    { id: 1, name: 'Step two', description: getRandomWords( random(5, 20) ), },
    { id: 2, name: 'Step three', description: getRandomWords( random(5, 20) ), },
    { id: 3, name: 'Step four', description: getRandomWords( random(5, 20) ), },
    { id: 4, name: 'Step five', description: getRandomWords( random(5, 20) ), },
    { id: 5, name: 'Step six', description: getRandomWords( random(5, 20) ), },
    { id: 6, name: 'Step seven', description: getRandomWords( random(5, 20) ), },
    { id: 7, name: 'Step eight', description: getRandomWords( random(5, 20) ), },
    { id: 8, name: 'Step nine', description: getRandomWords( random(5, 20) ), },
    { id: 9, name: 'Step ten', description: getRandomWords( random(5, 20) ), },
];


module.exports = {
    CAMPAIGNS,
    STEPS
};
