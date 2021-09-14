import getName from './getName';

describe('getName', () => {
  it('it isolates the name key value for spot', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const name = getName(spot);
    expect(name).toEqual('spot');
  });
  it('it isolates the name key value for Aang', () => {
    const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };
    const name = getName(character);
    expect(name).toEqual('Aang');
  });
});
