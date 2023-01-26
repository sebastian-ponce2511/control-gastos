import React from "react";
import NewBudget from "./NewBudget";

const Header = ({ budget, setBudget }) => {
  return (
    <header className="container">
      <div className="header-budget-box">
        <h1 className="header-title">Planificador de gastos</h1>
        <NewBudget budget={budget} setBudget={setBudget} />
      </div>
    </header>
  );
};

export default Header;
