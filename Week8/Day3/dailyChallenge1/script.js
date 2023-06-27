const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
];

const allUserNames = [];
gameInfo.forEach((el) => {
    allUserNames.push(el['username']);
})

console.log(allUserNames);


const score = [];
gameInfo.forEach((element) => {
    if (element['score'] > 5) {
        score.push(element['username']);
    }
});
console.log(score);