import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AddBtn from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [saveExpenses, setSaveExpenses] = useState([]);

  const handleModal = () => {
    setModal(true);
  };

  return (
    <div className={modal ? "fixate" : ""}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        saveExpenses={saveExpenses}
      />
      {isValidBudget && (
        <img
          className="add-btn"
          src={AddBtn}
          alt="add-btn"
          onClick={handleModal}
        />
      )}
      {modal ? (
        <Modal
          setModal={setModal}
          saveExpenses={saveExpenses}
          setSaveExpenses={setSaveExpenses}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
