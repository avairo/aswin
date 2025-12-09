import Terminal from "./components/terminal/Terminal";
import UsernameContextProvider from "./context/UsernameContext";
import InteractiveBadgeFrame from "./components/InteractiveBadgeFrame";

const App = () => {
  return (
    <UsernameContextProvider>
      {/* Terminal background */}
      <div className="terminal-container fixed inset-0 flex items-center justify-center z-1">
        <div className="relative pointer-events-auto w-full flex items-center justify-center">
          <Terminal />
        </div>
      </div>

      {/* 3D badge overlay */}
      <div
        className="badge-overlay fixed inset-0 flex items-start justify-end pr-50"
        style={{ pointerEvents: "none" }}
      >
        <div
          className="pointer-events-auto"
          style={{
            opacity: 1,
            width: "540px",
            maxWidth: "80vw",
            height: "720px",
            maxHeight: "90vh",
          }}
        >
          <InteractiveBadgeFrame />
        </div>
      </div>
    </UsernameContextProvider>
  );
};

export default App;
