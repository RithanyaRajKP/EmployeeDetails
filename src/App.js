import "./App.css";
import Login from "./main/Login";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProfileDetailRoutes from "./component/ProfileDetail/ProfileDetailRoutes";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/:id/*" element={<ProfileDetailRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
