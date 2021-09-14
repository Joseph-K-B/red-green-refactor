const capitalizeAndFilter = (arr) => {
  const string = arr.map((str) => 
    str.charAt(0).toUpperCase() + str.slice(1)   
  );
  const newArr = string.filter(item => !item.startsWith('F'));
  return newArr;
};

export default capitalizeAndFilter;
