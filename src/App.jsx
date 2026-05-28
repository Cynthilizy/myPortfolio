import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { colors } from "./colors";
import Home from "./Home";
import Projects from "./Projects";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [mode, setMode] = useState("light");
  const theme = colors[mode];

  return (
    <div className="app" style={{ background: theme.bg, minHeight: "100dvh" }}>
      <Header theme={theme} mode={mode} setMode={setMode} />
      <main>
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />

          <Route path="/projects" element={<Projects theme={theme} />} />
        </Routes>
      </main>
      <Footer theme={theme} mode={mode} />
    </div>
  );
}

export default App;
