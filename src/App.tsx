import Terminal from "./components/terminal/Terminal";
import UsernameContextProvider from "./context/UsernameContext";
import InteractiveBadgeFrame from "./components/InteractiveBadgeFrame";

const App = () => {
  return (
    <UsernameContextProvider>
      {/* Terminal in background - explicitly lower z-index */}
      <div className="terminal-container fixed inset-0 flex items-center justify-center z-1">
        <div className="relative pointer-events-auto w-full flex items-center justify-center">
          <Terminal />
        </div>
      </div>
      {/* 3D Badge as overlay in front - highest z-index - rendered AFTER terminal */}
      <div 
        className="badge-overlay fixed inset-0 flex items-center justify-center" 
        style={{ 
          pointerEvents: 'none'
        }}
      >
        <div 
          className="w-full h-full" 
          style={{ 
            opacity: 1,
            pointerEvents: 'auto'
          }}
        >
          <InteractiveBadgeFrame />
        </div>
      </div>
    </UsernameContextProvider>
  );
};

export default App;
