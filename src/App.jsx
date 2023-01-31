import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AddBtn from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState("");
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [saveExpenses, setSaveExpenses] = useState([]);
  const [editExpense, setEditExpense] = useState({});

  useEffect(() => {
    console.log(editExpense);
  }, [editExpense]);

  const handleModal = () => {
    setModal(true);
    setEditExpense({});
  };

  return (
    <div className={modal ? "fixate" : ""}>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        saveExpenses={saveExpenses}
        setSaveExpenses={setSaveExpenses}
        setModal={setModal}
        setEditExpense={setEditExpense}
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
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
