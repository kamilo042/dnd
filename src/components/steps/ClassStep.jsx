// src/components/steps/ClassStep.jsx
import { useCharacter } from '../../contexts/CharacterContext';

const classes = ['Guerrero', 'Mago', 'Pícaro'];

export function ClassStep() {
  const { character, setCharacter } = useCharacter();
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Elige tu clase</h2>
      <select
        value={character.class}
        onChange={(e) => setCharacter(prev => ({ ...prev, class: e.target.value }))}
        className="select"
      >
        <option value="">— Elige —</option>
        {classes.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  );
}
