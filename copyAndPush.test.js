import copyAndPush from './copyAndPush';


describe('copyAndPush', () => {
  it('it creates a new array with new items pushed to end', () => {
    const numbers = [1, 2, 3];
    const arr = copyAndPush(numbers, 4);
    expect(arr).toEqual([1, 2, 3, 4]);
  });
});
