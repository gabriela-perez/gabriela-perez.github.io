const palindromo = require('../tareas/tarea_Siete');
test('reverse word and compare', () => {
  expect(palindromo).toBe("anilina")
});

test('reverse word and compare', () => {
  expect(palindromo).not.toContain("2")
});
