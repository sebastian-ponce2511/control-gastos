import Expense from "./Expense";

const ExpLists = ({
  saveExpenses,
  setSaveExpenses,
  setModal,
  setEditExpense,
}) => {
  return (
    <>
      <h2 className="exp-list-title">
        {saveExpenses.length === 0 ? "No hay Gastos" : "Gastos"}
      </h2>
      <div>
        {saveExpenses.map((exp) => (
          <Expense
            exp={exp}
            key={exp.id}
            setModal={setModal}
            setEditExpense={setEditExpense}
            saveExpenses={saveExpenses}
            setSaveExpenses={setSaveExpenses}
          />
        ))}
      </div>
    </>
  );
};

export default ExpLists;
