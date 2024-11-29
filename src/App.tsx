function App() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="my-4 text-center font-bold text-4xl">Find Luigi</h1>
      <div className="flex gap-2">
        <h2>Levels</h2>
        <h2>Settings</h2>
        <h2>Help</h2>
      </div>

      <canvas></canvas>
    </div>
  );
}

export default App;
