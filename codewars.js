function transformString(str) {
  let arr = str.split("-");

  return arr.reduce((acc, item) => {
    const cutStr = item.slice(1);
    const transformedStr = item.slice(0, 1).toUpperCase() + cutStr;

    return (acc += transformedStr);
  });
}
console.log(transformString("S-Bd-C-vasja-petya"));



function warnTheSheep(queue) {
  return queue.reduceRight((acc, item, i, arr) => {
    if (arr.length - 1 === i && item === "wolf") {
      acc = "Pls go away and stop eating my sheep"
    } else if (item === "wolf") {
      acc = `Oi! Sheep number ${arr.length - i - 1}! You are about to be eaten by a wolf!`
    }
    
    return acc;
  }, '')
}

console.log(transformString(["sheep", "sheep", "sheep", "wolf", "sheep"]));


function elevator(left, right, call){
  return Math.abs(call - right) > Math.abs(call - left) ? "left" : "right";
}
console.log(elevator(0, 1, 3));

function points(games) {
  return games.reduce((acc, item) => {
    const scoreArr = item.split(":");
    return (acc +=
      scoreArr[0] > scoreArr[1] ? 3 : scoreArr[0] === scoreArr[1] ? 1 : 0);
  }, 0);
}
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

function pillars(num_pill, dist, width) {
  const distSm = dist*10;
  if (num_pill>=2 && num_pill%2 == 0) {
  return distance = (distSm*(num_pill-1)) + (width*(num_pill-2))}
  else if (num_pill=1) {
    return 0;
  }
}
console.log(pillars(2, 20, 25));

