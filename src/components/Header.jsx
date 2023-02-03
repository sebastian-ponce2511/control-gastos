import React from "react";
import BudgetControl from "./BudgetControl";
import ExpLists from "./ExpLists";
import Filters from "./Filters";
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
  filter,
  setFilter,
  filteredExp,
  setFilteredExp,
}) => {
  return (
    <>
      <h1 className="header-title">Planificador de gastos</h1>
      <header className="container">
        {isValidBudget ? (
          <>
            <BudgetControl
              budget={budget}
              setBudget={setBudget}
              saveExpenses={saveExpenses}
              setSaveExpenses={setSaveExpenses}
              setIsValidBudget={setIsValidBudget}
            />
            <main>
              {saveExpenses.length === 0 ? (
                ""
              ) : (
                <>
                  <Filters
                    filter={filter}
                    setFilter={setFilter}
                    filteredExp={filteredExp}
                  />
                  <ExpLists
                    budget={budget}
                    saveExpenses={saveExpenses}
                    setSaveExpenses={setSaveExpenses}
                    setModal={setModal}
                    setEditExpense={setEditExpense}
                    filter={filter}
                    filteredExp={filteredExp}
                    setFilteredExp={setFilteredExp}
                  />
                </>
              )}
            </main>
          </>
        ) : (
          <div className="box-shadow">
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
