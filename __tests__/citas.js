import Citas from "../js/classes/Citas";

describe('Probar la clase de citas', () => {
  
  const citas = new Citas();
  const id= Date.now();

  test('Agregar una nueva cita', () => {
    const citaObj = {
      mascota: 'Honey',
      propietario: 'Juan',
      telefono: '310',
      fecha: '14-05-2024',
      hora:'10:30',
      sintomas: 'Come mucho.'
    };
    citaObj.id = id;
    citas.agregarCita(citaObj);

    //Test.
    expect(citas).toMatchSnapshot();
  });

  test('Actualizar cita', () => {
    const citaActualizada = {
      id,
      mascota: 'Honey velez',
      propietario: 'Melissa',
      telefono: '31055',
      fecha: '14-05-2024',
      hora:'08:30',
      sintomas: 'Come y duerme mucho.'
    };
    citas.editarCita(citaActualizada);

    expect(citas).toMatchSnapshot();
  });

  test('Eliminar cita', () => {
    citas.eliminarCita(id);

    expect(citas).toMatchSnapshot();
  });
});
