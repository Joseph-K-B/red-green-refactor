import copyAndPush from './copyAndPush';


describe('copyAndPush', () => {
  it('it creates a new array with new items pushed to end', () => {
    const arr = [1, 2, 3];
    const newArr = copyAndPush(arr, 4);
    expect(newArr).toEqual([1, 2, 3, 4]);
  });
  it('it maintains original array', () => {
    const arr = [1, 2, 3];
    const newArr = copyAndPush(arr, 5);
    expect(newArr).toEqual([1, 2, 3, 5]);
    expect(arr).toEqual([1, 2, 3]);    
  });
});
