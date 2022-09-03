
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import MultiForm from "./pages/multi-form";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <MultiForm>

          </MultiForm>
        }></Route>
      </Routes>
    </Router>
  );
}

export default App;
