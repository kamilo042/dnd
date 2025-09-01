// src/contexts/CharacterContext.jsx
import { createContext, useContext, useState } from 'react';

const CharacterContext = createContext();

export function CharacterProvider({ children }) {
  const [character, setCharacter] = useState({
    abilities: { str: 10, dex: 10, con: 10, int: 10, wis: 10, cha: 10 },
    race: '',
    class: ''
  });
  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacter() {
  return useContext(CharacterContext);
}
