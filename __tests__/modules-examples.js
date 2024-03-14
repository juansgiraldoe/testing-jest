import { suma } from "../fn.js";

describe('Suma de 2 numeros.', () => {
  test('Sumar 10 y 20 debe dar 30.', () => {
    expect(suma(10, 20)).toBe(30)
  });
});
