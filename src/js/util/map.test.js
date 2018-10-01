const map = require('./map');

describe('method [map] test', () =>{

  test('number Array test', () =>{
    expect(map([1, 2, 3, 4, 5], (item, idx) =>item + idx))
    .toEqual([1, 2, 3, 4, 5].map((item, idx) =>item + idx));
  });

});
