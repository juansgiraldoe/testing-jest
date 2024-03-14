//String methods en jest.

const password = `123456`;

describe('Validacion de password.', () => {
  test('Password letnght > 6', () => {
    expect( password ).toHaveLength(6);
  });

  test('Pasword no vacio.', () => {
    expect(password).not.toHaveLength(0);
  });
});