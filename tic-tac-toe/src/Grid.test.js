const Grid = require('./components/Grid');

test('ok',()=>{
    expect(Grid.getRandomInt(2)).toBe(1);
});