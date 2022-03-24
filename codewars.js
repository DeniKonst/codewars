function transformString(str) {
  let arr = str.split("-");

  return arr.reduce((acc, item) => {
    const cutStr = item.slice(1);
    const transformedStr = item.slice(0, 1).toUpperCase() + cutStr;

    return (acc += transformedStr);
  });
}
console.log(transformString("S-Bd-C-vasja-petya"));