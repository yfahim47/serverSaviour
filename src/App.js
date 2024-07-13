import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SideNav from "../src/components/sideNav";
import "../src/styles/appStyles.css";
import Webhooks from "./screens/Webhooks";

function App() {
  return (
    <div className="appstyle">
      <BrowserRouter>
        <div>
          <SideNav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webhooks" element={<Webhooks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
