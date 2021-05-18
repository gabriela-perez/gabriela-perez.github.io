const minimumValue = require('../tareas/tarea_Seis');
test('minimun of a group', () => {
  expect(minimumValue).toEqual([ 40, 1, 10, 2, 5 ])
});

test('array size', () => {
  expect(minimumValue.length).toBe(10);
});

test('not contains char', () => {
  expect(minimumValue).not.toEqual("a")
});
