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