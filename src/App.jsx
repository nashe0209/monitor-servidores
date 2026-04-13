import Header from './components/Header';
import ServerList from './components/ServerList';
import { servidoresMock } from './data';
import './App.css';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      {/* Pasamos nuestro arreglo de datos como una "prop" llamada 'datos' */}
      <ServerList datos={servidoresMock} />
    </div>
  );
}