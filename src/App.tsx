import Countdown from "./components/Countdown";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 bg-[#121212]">
      <h2 className="text-2xl font-medium text-white uppercase sm:text-4xl">
        Coming soon ...
      </h2>
      <Countdown targetDate="2025-11-17T00:00:00" />
      <p className="text-sm text-slate-300">
        Emediong Udoh &copy; 2020 - {currentYear}.
      </p>
    </div>
  );
}

export default App;
