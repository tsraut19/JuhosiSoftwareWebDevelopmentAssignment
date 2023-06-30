
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { CustomerForm } from './Components/CustomerForm';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/form" element={<CustomerForm></CustomerForm>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
