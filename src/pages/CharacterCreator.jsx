// src/pages/CharacterCreator.jsx
import { Wizard } from '../components/Wizard/Wizard';
import { AbilityStep } from '../components/steps/AbilityStep';
import { RaceStep } from '../components/steps/RaceStep';
import { ClassStep } from '../components/steps/ClassStep';
import { PreviewStep } from '../components/steps/PreviewStep';
import { CharacterProvider } from '../contexts/CharacterContext';

export default function CharacterCreator() {
  return (
    <CharacterProvider>
      <Wizard>
        {[<AbilityStep />, <RaceStep />, <ClassStep />, <PreviewStep />]}
      </Wizard>
    </CharacterProvider>
  );
}
