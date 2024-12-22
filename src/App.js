
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes} from "react-router-dom";
import { Route } from 'react-router-dom';
import Nav from "./Compountes/NBar";
import Home from "./Compountes/Home";
import './App.css'

function App() {
  return (
  

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav/>}>
        <Route index element={<Home/>}/>

      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
