// src/components/steps/RaceStep.jsx
import { useCharacter } from '../../contexts/CharacterContext';

const races = ['Humano', 'Elfo', 'Enano'];

export function RaceStep() {
  const { character, setCharacter } = useCharacter();
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Selecciona tu raza</h2>
      <select
        value={character.race}
        onChange={(e) => setCharacter(prev => ({ ...prev, race: e.target.value }))}
        className="select"
      >
        <option value="">— Elige —</option>
        {races.map(r => <option key={r} value={r}>{r}</option>)}
      </select>
    </div>
  );
}
