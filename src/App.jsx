import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [budget, setBudget] = useState("");
  return (
    <>
      <Header budget={budget} setBudget={setBudget} />
    </>
  );
}

export default App;
