import { Button } from "./components/ui/button"

function App() {
  return (
    <div className="p-6 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Generador D&D 3.5</h1>
      <Button>Generar personaje</Button>
    </div>
  )
}

export default App