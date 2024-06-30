import { Route, Routes } from "react-router-dom";
import { Detail } from "./pages/Detail/Detail";
import { LandingPage } from "./pages/LandingPage/LandingPage";
import { Home } from "./pages/Home/Home";
import { FormPage } from "./pages/FormPage/FormPage";
import Room from "./componentes/Room";
//import { NavBar } from "./componentes/NavBar/NavBar";
//import { Header } from "./componentes/Header/Header";



function App() {
  //const location = useLocation();

  return (
    <div>
      
      {/* <h1>Hotelfy</h1>
      {location.pathname !== '/' && <NavBar />} */}
      <Routes>
        <Route path="/" element={<LandingPage />}/>;
        <Route path="/home" element={<Home/>} />;
        <Route path="/detail" element={<Detail />} />;
        <Route path="/create" element={<FormPage/>} />
        <Route path="/rooms" element={Room} />;
      </Routes>
      
    </div>
  );
}

export default App;
