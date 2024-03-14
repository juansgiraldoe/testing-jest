//Snapshots.

const cliente = {
  nombre: 'Juan Sebastian.',
  balance: 500,
  tipo: 'Premium',
};

describe('Testing al cliente.', () => {
  test('Es Juan', () => {
    expect(cliente).toMatchSnapshot();
  });
});
