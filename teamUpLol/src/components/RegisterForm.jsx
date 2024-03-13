import { useState } from 'react';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [edad, setEdad] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [riotID, setRiotID] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos de registro al servidor
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Nombre de usuario" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="number" placeholder="Edad usuario" value={edad} onChange={(e) => setEdad(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Repita la Contraseña" value={password2} onChange={(e) => setPassword2(e.target.value)} />
      <input type="text" placeholder="Riot ID" value={riotID} onChange={(e) => setRiotID(e.target.value)} />
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
