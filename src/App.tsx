import { Clock } from "lucide-react";

// Local imports
import Countdown from "./components/Countdown";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-12 bg-[#121212]">
      <h2 className="flex items-center gap-2 text-2xl font-medium text-yellow-500/80 uppercase sm:text-4xl">
        <Clock className="size-8" /> Cloksy
      </h2>
      <Countdown targetDate="2025-11-17T00:00:00" />
      <p className="text-sm text-slate-300">
        Emediong Udoh &copy; 2020 - {currentYear}.
      </p>
    </div>
  );
}

export default App;
