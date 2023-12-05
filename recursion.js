// Factorial function with recursion

const factorial = (n) => {
  return n === 1 ? 1 : n * factorial(n - 1);
};

console.log(factorial(5));

// Binary tree traversal with recursion

const tree = {
  value: 5,
  left: {
    value: 2,
    left: {
      value: 9,
      right: {
        value: 1,
      },
      left: {
        value: 1,
      },
    },
  },
  right: {
    value: 4,
    left: {
      value: 3,
      right: {
        value: 7,
      },
    },
  },
};

const recursiveSum = (tree) => {
  return tree
    ? tree.value + recursiveSum(tree.left) + recursiveSum(tree.right)
    : null;
};

console.log(recursiveSum(tree));
