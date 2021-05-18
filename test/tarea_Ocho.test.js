const vowelCounter = require('../tareas/tarea_Ocho');
test('contando consonantes y vocales', () => {
  expect(vowelCounter).toEqual("Vocales 5 Consonantes 4")
});

test('la cadena contenga números', () => {
  expect(vowelCounter).toContain(5 || 4)
});

test('la cadena no contenga 0', () => {
  expect(vowelCounter).not.toContain(0 || null)
});
