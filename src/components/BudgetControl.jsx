import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { formatCurrency } from "../helpers/formatCurrency";

const BudgetControl = ({
  budget,
  setBudget,
  saveExpenses,
  setSaveExpenses,
  setIsValidBudget,
}) => {
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

  const handleReset = () => {
    const confirmReset = confirm(
      "¿Desea reiniciar la aplicación? Se perderán los datos guardados."
    );
    if (confirmReset) {
      setBudget(0);
      setSaveExpenses([]);
      setIsValidBudget(false);
    }
  };

  return (
    <>
      <div className="header-budget-box budget-control-flex">
        <div className="circle">
          <CircularProgressbar
            styles={buildStyles({
              pathColor: percentage > 100 ? "#dc2626" : "#3b82f6",
              trailColor: "#f5f5f5",
              textColor: percentage > 100 ? "#dc2626" : "#3b82f6",
              textSize: "10",
            })}
            text={`${percentage}% Gastado`}
            value={percentage}
          />
        </div>
        <div className="budget-control-text">
          <div className="reset">
            <input
              className="reset-btn"
              type="button"
              value="Reiniciar App"
              onClick={handleReset}
            />
          </div>
          <p>
            Presupuesto: <span>{formatCurrency(budget)}</span>
          </p>
          <p className={`${available < 0 ? "negative" : ""}`}>
            Disponible: <span>{formatCurrency(available)}</span>
          </p>
          <p>
            Gastado: <span>{formatCurrency(spent)}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default BudgetControl;
