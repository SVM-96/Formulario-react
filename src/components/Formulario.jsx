import { useState } from "react";
import "../styles.css";
import Alert from "./Alert"; // Importa el componente Alert

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setConstraseña] = useState("");
  const [confirmContraseña, setConfirmContraseña] = useState("");
  const [registroExitoso, setRegistroExitoso] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  // Validación de contraseñas coincidentes y formato email
  const validarDatos = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      nombre === "" ||
      email === "" ||
      contraseña === "" ||
      confirmContraseña === ""
    ) {
      setRegistroExitoso(false);
      setAlertMessage("Por favor, completa todos los campos");
    } else if (!emailRegex.test(email)) {
      setRegistroExitoso(false);
      setAlertMessage("Por favor, introduce un correo electrónico válido.");
    } else if (contraseña !== confirmContraseña) {
      setRegistroExitoso(false);
      setAlertMessage("Las contraseñas no coinciden. Inténtalo de nuevo.");
    } else if (contraseña.length < 5) {
      setRegistroExitoso(false);
      setAlertMessage("La contraseña es demasiado corta");
    } else {
      setRegistroExitoso(true);
      setAlertMessage("Te has registrado con éxito.");
    }
  };

  return (
    <div>
      {/* Muestra la alerta */}
      <Alert success={registroExitoso} message={alertMessage} />

      {/* Formulario */}
      <form className="form" onSubmit={validarDatos}>
        <input
          className="form-control"
          type="text"
          name="nombre"
          placeholder="Nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
        />
        <input
          className="form-control"
          type="text"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          className="form-control"
          type="password"
          name="contraseña"
          placeholder="Contraseña (Min. 5 caracteres)"
          onChange={(e) => setConstraseña(e.target.value)}
          value={contraseña}
        />
        <input
          className="form-control"
          type="password"
          name="confirmcontraseña"
          placeholder="Confirma tu contraseña"
          onChange={(e) => setConfirmContraseña(e.target.value)}
          value={confirmContraseña}
        />
        <button type="submit" className="btn btn-success">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Formulario;
