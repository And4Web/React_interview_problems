import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

function App() {
  return (
    <>
      <h1>React interview problems</h1>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
