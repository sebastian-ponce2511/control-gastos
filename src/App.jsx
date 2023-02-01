import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import AddBtn from "./img/nuevo-gasto.svg";

function App() {
  const [budget, setBudget] = useState(
    Number(localStorage.getItem("budget") ?? 0)
  );
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [saveExpenses, setSaveExpenses] = useState(
    localStorage.getItem("saveExpenses")
      ? JSON.parse(localStorage.getItem("saveExpenses"))
      : []
  );
  const [editExpense, setEditExpense] = useState({});

  useEffect(() => {
    localStorage.setItem("budget", budget ?? "");
  }, [budget]);

  useEffect(() => {
    const budgetLS = localStorage.getItem("budget") ?? "";
    if (budgetLS > 0) {
      setIsValidBudget(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("saveExpenses", JSON.stringify(saveExpenses) ?? []);
  }, [saveExpenses]);

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
