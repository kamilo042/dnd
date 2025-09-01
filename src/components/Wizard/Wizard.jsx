import { useState } from 'react';

const steps = [
  { id: 'abilities', title: 'Puntuaciones' },
  { id: 'race', title: 'Raza' },
  { id: 'class', title: 'Clase' },
  { id: 'preview', title: 'Vista previa' }
];

export function Wizard({ children }) {
  const [stepIndex, setStepIndex] = useState(0);
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <aside className="w-1/4 p-6 bg-white border-r border-gray-200 flex flex-col items-center">
        <ul className="w-full">
          {steps.map((s, i) => (
            <li
              key={s.id}
              className={`cursor-pointer mb-4 py-2 px-4 rounded-lg transition-all ${
                i === stepIndex
                  ? 'bg-gray-900 text-white font-bold'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setStepIndex(i)}
            >
              {s.title}
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-3/4 p-10 flex flex-col items-center justify-center">
        <div className="w-full max-w-xl bg-white rounded-xl p-8 shadow border border-gray-200">
          {children[stepIndex]}
        </div>
        <div className="mt-8 flex justify-between w-full max-w-xl">
          <button
            onClick={() => setStepIndex(Math.max(0, stepIndex - 1))}
            disabled={stepIndex === 0}
            className={`px-6 py-2 rounded-lg font-semibold shadow transition-all ${
              stepIndex === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gray-900 text-white hover:bg-gray-700'
            }`}
          >
            Atrás
          </button>
          <button
            onClick={() => setStepIndex(Math.min(steps.length - 1, stepIndex + 1))}
            className="px-6 py-2 rounded-lg font-semibold shadow bg-gray-900 text-white hover:bg-gray-700 transition-all"
          >
            {stepIndex < steps.length - 1 ? 'Siguiente' : 'Finalizar'}
          </button>
        </div>
      </main>
    </div>
  );
}