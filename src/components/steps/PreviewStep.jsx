// src/components/steps/PreviewStep.jsx
import { useCharacter } from '../../contexts/CharacterContext';

export function PreviewStep() {
  const { character } = useCharacter();
  return (
    <div>
      <h2 className="text-lg font-bold">Vista previa</h2>
      <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(character, null, 2)}</pre>
    </div>
  );
}
