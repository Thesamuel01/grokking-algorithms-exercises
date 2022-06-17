let array = [];

for (let index = 0; index <= 100; index++) array.push(index)

const binarySearch = (list, item) => {
  let bottom = list[0];
  let top = list.length - 1;

  while(bottom <= top) {
    let middle = Math.floor((top + bottom) / 2);
    const attempt = list[middle];

    if (attempt === item) {
      return attempt
    } else if (attempt > item) {
      top = middle - 1;
    } else {
      bottom = middle + 1
    }
  }

  return null;
};

console.log(binarySearch(array, 24))
console.log(binarySearch(array, 300))