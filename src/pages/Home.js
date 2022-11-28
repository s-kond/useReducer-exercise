import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  function goToCounter() {
    navigate("/counter");
  }
  function goToToDos() {
    navigate("/todos");
  }

  return (
    <>
      <header>
        <h1>Practicing useReducer</h1>
      </header>
      <nav>
        <button onClick={goToCounter}>Counter (simple)</button>
        <button onClick={goToToDos}>To Do's (complex)</button>
      </nav>
    </>
  );
}
