// src/App.jsx
import CharacterCreator from './pages/CharacterCreator';

export function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Creador de Personajes D&D 3.5</h1>
      <CharacterCreator />
    </div>
  );
}
