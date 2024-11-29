import { LuigiGame } from "./game/LuigiGame";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        <h1 className="my-4 text-center font-bold text-4xl">Find Luigi</h1>
        <div className="my-4 flex gap-2">
          <h2>Levels</h2>
          <h2>Settings</h2>
          <h2>Help</h2>
        </div>
      </div>

      <div className="border ">
        <LuigiGame />
      </div>
    </div>
  );
}

export default App;
