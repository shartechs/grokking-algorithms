// sort an array from smallest to largest

const array = [22, 3, 11, 8, 700, 250, 2, 1200];

// find smallest number in the array
const findSmallest = (array) => {
  let smallest = array[0];
  array.forEach((e) => (smallest = e < smallest ? e : smallest));
  return smallest;
};

// selection sort of an array
const selectionSort = (array) => {
  let arrayCopy = array;
  let sortedArray = [];
  while (arrayCopy.length > 0) {
    const smallest = findSmallest(arrayCopy);
    sortedArray.push(smallest);
    arrayCopy.splice(arrayCopy.indexOf(smallest), 1);
  }
  return sortedArray;
};

const sortedArray = selectionSort(array);
console.log(sortedArray);
