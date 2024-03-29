//Functions in Jest.

function suma(a, b) {
  return a + b;
};

function resta(a, b) {
  return a - b;
};

describe('Testing a las funciones de suma y resta', () => {
  test('Suma de 20 + 30', () => {
    expect( suma(20, 30) ).toBe(50);
  });

  test('Resta de 10 - 5', () => {
    expect( resta(10, 5) ).toBe(5);
  });

  test('Que la suma 10 y 10 no sea 10', () => {
    expect( suma(10, 10) ).not.toBe(10);
  })
  
});
