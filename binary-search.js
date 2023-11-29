// Binary search for item in the list

const list = [1, 3, 5, 7, 9];

const binarySearch = (list, item) => {
  let lowestIndex = 0;
  let highestIndex = list.length - 1;

  while (lowestIndex <= highestIndex) {
    const midIndex = Math.floor((lowestIndex + highestIndex) / 2);
    if (list[midIndex] === item) {
      return midIndex;
    } else if (list[midIndex] < item) {
      lowestIndex = midIndex + 1;
    } else if (list[midIndex] > item) {
      highestIndex = midIndex - 1;
    }
  }
  return -1;
};

console.log(binarySearch(list, 7));
