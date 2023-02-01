import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatCurrency } from "../helpers/formatCurrency";

const BudgetControl = ({ budget, saveExpenses }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpent = saveExpenses.reduce((total, exp) => exp.qty + total, 0);
    setSpent(totalSpent);

    const totalAvailable = budget - totalSpent;
    setAvailable(totalAvailable);

    const newPercent = (((budget - totalAvailable) / budget) * 100).toFixed(2);
    setPercentage(newPercent);
  }, [saveExpenses]);

  return (
    <div className="header-budget-box budget-control-flex">
      <div className="circle">
        <CircularProgressbar
          styles={buildStyles({
            pathColor: "#3b82f6",
            trailColor: "#f5f5f5",
            textColor: "#3b82f6",
            textSize: "11",
          })}
          text={`${percentage}% Gastado`}
          value={percentage}
        />
      </div>
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
