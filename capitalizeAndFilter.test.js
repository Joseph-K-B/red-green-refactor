import capitalizeAndFilter from './capitalizeAndFilter';


describe('capitalizeAndFilter', () => {
  it('it capitalizes the strings and filters out words starting with F/f', () => {
    const arr = ['dog', 'cat', 'frog', 'Fish'];
    const newArr = capitalizeAndFilter(arr);
    expect(newArr).toEqual(['DOG', 'CAT']);
  });
});
