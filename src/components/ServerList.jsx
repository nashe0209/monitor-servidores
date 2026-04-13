import ServerCard from './ServerCard';

// Recibimos la prop 'datos' que nos enviÃ³ App.jsx
export default function ServerList({ datos }) {
  return (
    <div className="server-list">
      {/* Usamos .map() para transformar cada objeto de datos en un componente visual */}
      {datos.map((servidor) => (
        <ServerCard key={servidor.id} info={servidor} />
      ))}
    </div>
  );
}
