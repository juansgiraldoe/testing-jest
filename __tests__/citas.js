import Citas from "../js/classes/Citas";

describe('Probar la clase de citas', () => {
  
  const citas = new Citas();

  test('Agregar una nueva cita', () => {
    const citaObj = {
      mascota: 'Honey',
      propietario: 'Juan',
      telefono: '310',
      fecha: '14-05-2024',
      hora:'10:30',
      sintomas: 'Come mucho.'
    };
    citaObj.id = Date.now();
    citas.agregarCita(citaObj);

    //Test.
    expect(citas).toMatchSnapshot();
  });
});
