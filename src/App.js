import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/Counter";
import ToDos from "./pages/ToDos";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/todos" element={<ToDos />} />
      </Route>
    </Routes>
  );
}

export default App;
