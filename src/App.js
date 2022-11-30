import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Dashboard } from "./pages/dashboard/dashboard";
import "./App.css"
import { Groups } from "./pages/groups/groups";
import { Students } from "./pages/students/students";
import { useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="app-container">
      <Navbar setIsActive={setIsActive} isActive={isActive} />
      <div className="app-components" onMouseEnter={() => setIsActive(false)}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/guruhlar" element={<Groups />} />
          <Route path="/oquvchilar" element={<Students />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
