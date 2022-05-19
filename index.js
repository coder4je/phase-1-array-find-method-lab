// code your solution here
const record = [
    { year: "2015", result: "a"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]

function superbowlWin(record) {
    const winners = record.find( ({result}) => result === 'W');
    return (winners ? winners.year : undefined); 
}

console.log(superbowlWin(record))