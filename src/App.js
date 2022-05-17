import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CustomInput from "./components/atom/CustomInput";
import GetData from "./components/pages/GetData";
import PageOne from "./components/pages/PageOne";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/get" element={<GetData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
