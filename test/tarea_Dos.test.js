const factorial = require('../tareas/tarea_Dos');
test('factorial number expected', () => {
  expect(factorial()).toBe(120);
});

test('data type as number', () => {
  expect(typeof factorial()).toBe('number');
});

test('data type not as string', () => {
  expect(typeof factorial()).not.toBe('string');
  console.log(typeof factorial());
});
