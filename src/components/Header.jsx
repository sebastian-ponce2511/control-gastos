import React from "react";
import BudgetControl from "./BudgetControl";
import ExpLists from "./ExpLists";
import NewBudget from "./NewBudget";

const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  saveExpenses,
  setSaveExpenses,
  setModal,
  setEditExpense,
}) => {
  return (
    <>
      <h1 className="header-title">Planificador de gastos</h1>
      <header className="container">
        {isValidBudget ? (
          <>
            <BudgetControl budget={budget} saveExpenses={saveExpenses} />
            <main>
              {saveExpenses.length === 0 ? (
                ""
              ) : (
                <ExpLists
                  budget={budget}
                  saveExpenses={saveExpenses}
                  setSaveExpenses={setSaveExpenses}
                  setModal={setModal}
                  setEditExpense={setEditExpense}
                />
              )}
            </main>
          </>
        ) : (
          <div className="header-budget-box">
            <NewBudget
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
