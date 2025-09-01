// src/components/steps/AbilityStep.jsx
import { useCharacter } from '../../contexts/CharacterContext';

export function AbilityStep() {
  const { character, setCharacter } = useCharacter();

  const update = (key, val) => {
    setCharacter(prev => ({
      ...prev,
      abilities: { ...prev.abilities, [key]: +val }
    }));
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Asigna tus puntuaciones</h2>
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(character.abilities).map(([k, v]) => (
          <div key={k}>
            <label className="capitalize block">{k}</label>
            <input
              type="number"
              min="3"
              max="18"
              value={v}
              onChange={(e) => update(k, e.target.value)}
              className="input"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
