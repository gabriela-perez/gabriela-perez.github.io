const vowelCounter = require('../tareas/tarea_Cinco');
test('vowels in a string', () => {
  expect(vowelCounter()).toEqual(4)
});

test('type of result as number', () => {
expect(typeof vowelCounter()).toBe('number');
});

test('type of result not string', () => {
expect(typeof vowelCounter()).not.toBe('string');
});
