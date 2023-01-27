import React from "react";
import BudgetControl from "./BudgetControl";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget, isValidBudget, setIsValidBudget }) => {
  return (
    <>
      <h1 className="header-title">Planificador de gastos</h1>
      <header className="container">
        {isValidBudget ? (
          <BudgetControl budget={budget} />
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
