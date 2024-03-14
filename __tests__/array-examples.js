//Array methods in jest.

const carrito = ['Producto_1', 'Producto_2', 'Producto_3'];

describe('Testing al carrito de compras', () => {
  test('Probar que el array tenga 3 elementos.', () => {
    expect(carrito).toHaveLength(3);
  });

  test('Verificar que el carrito no este vacio.', () => {
    expect(carrito).not.toHaveLength(0);
  });
});