// Recibimos la prop 'info' que contiene los datos de un solo servidor
export default function ServerCard({ info }) {
  return (
    <div className="card">
      <h3>Nombre: {info.nombre}</h3>
      <p><strong>Rol asignado:</strong> {info.rol}</p>
      
      {/* Renderizado condicional usando un operador ternario */}
      <p className="status">
        <strong>Estado: </strong> 
        {info.activo ? "🟢 En línea" : "🔴 Caído"}
      </p>
    </div>
  );
}