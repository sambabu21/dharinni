import { BrowserRouter,Route,Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home/index";
import About from "./Components/About/Index";
import GetInvolved from "./Components/GetInvolved/Index";
import Projects from "./Components/Projects/Index";
import Events from "./Components/Events/Index";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}> 
            <Route index element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/projects" element={<Projects />}/>
            <Route path="/events" element={<Events />}/>
            <Route path="/contact" element={<GetInvolved />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
