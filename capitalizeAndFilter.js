const capitalizeAndFilter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    if (arr[i].charAt(0) === 'F') {
      arr.splice(i);
    }
  }
  return arr;
};

export default capitalizeAndFilter;
