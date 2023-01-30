import { useState, useEffect } from "react";
import { formatCurrency } from "../helpers/formatCurrency";

const BudgetControl = ({ budget, saveExpenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = saveExpenses.reduce((total, exp) => exp.qty + total, 0);
    setSpent(totalSpent);

    const totalAvailable = budget - totalSpent;
    setAvailable(totalAvailable);
  }, [saveExpenses]);

  return (
    <div className="header-budget-box budget-control-flex">
      <div>Gráfico aquí</div>
      <div className="budget-control-text">
        <p>
          Presupuesto: <span>{formatCurrency(budget)}</span>
        </p>
        <p>
          Disponible: <span>{formatCurrency(available)}</span>
        </p>
        <p>
          Gastado: <span>{formatCurrency(spent)}</span>
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
