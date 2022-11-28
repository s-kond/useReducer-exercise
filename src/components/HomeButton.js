import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();
  function backToHome() {
    navigate("/");
  }

  return (
    <button type="button" onClick={backToHome}>
      Back to home
    </button>
  );
}
