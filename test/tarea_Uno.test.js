const invertir = require('../tareas/tarea_Uno');

test('reverse array of strings', () => {
  expect(invertir).toStrictEqual([ 'Hydrogen', 'lithium', 'sodium', 'potassium' ]);

});
