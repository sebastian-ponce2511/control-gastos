import Expense from "./Expense";

const ExpLists = ({
  saveExpenses,
  setSaveExpenses,
  setModal,
  setEditExpense,
  filter,
  filteredExp,
  setFilteredExp,
}) => {
  return (
    <>
      <div>
        {filter ? (
          <>
            <h2 className="exp-list-title">
              {filteredExp.length === 0
                ? "No hay Gastos en esta categoría"
                : "Gastos"}
            </h2>
            {filteredExp.map((exp) => (
              <Expense
                exp={exp}
                key={exp.id}
                setModal={setModal}
                setEditExpense={setEditExpense}
                saveExpenses={saveExpenses}
                setSaveExpenses={setSaveExpenses}
                filteredExp={filteredExp}
                setFilteredExp={setFilteredExp}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="exp-list-title">
              {saveExpenses.length === 0 ? "" : "Gastos"}
            </h2>
            {saveExpenses.map((exp) => (
              <Expense
                exp={exp}
                key={exp.id}
                setModal={setModal}
                setEditExpense={setEditExpense}
                saveExpenses={saveExpenses}
                setSaveExpenses={setSaveExpenses}
                filteredExp={filteredExp}
                setFilteredExp={setFilteredExp}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ExpLists;
