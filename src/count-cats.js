module.exports = function countCats(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach(element => {
      if (element === "^^") count += 1;
    });
  }
  return count;
};
