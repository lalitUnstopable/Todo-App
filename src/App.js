import Create from "./Component/Create";
import {Routes, Route, HashRouter } from "react-router-dom";
import Read from "./Component/Read";
import Update from "./Component/Update";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Create />}></Route>
          <Route exact path="/read" element={<Read />}></Route>
          <Route exact path="/update" element={<Update />}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
