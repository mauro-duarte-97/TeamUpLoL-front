function SubmitButton() {
  const handleSubmit = () => {
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    console.log('Formulario enviado');
  };

  return (
    <button
      type="submit"
      style={{
        backgroundColor: '#8a2be2', // lila
        color: 'white',
        fontWeight: 'bold',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={handleSubmit}
    >
      CONTINUE
    </button>
  );
}

export default SubmitButton;
