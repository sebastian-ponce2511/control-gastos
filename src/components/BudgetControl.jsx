import { formatCurrency } from "../helpers/formatCurrency";

const BudgetControl = ({ budget }) => {
  return (
    <div className="header-budget-box budget-control-flex">
      <div>Gráfico aquí</div>
      <div className="budget-control-text">
        <p>
          Presupuesto: <span>{formatCurrency(budget)}</span>
        </p>
        <p>
          Disponible: <span>{formatCurrency(budget)}</span>
        </p>
        <p>
          Gastado: <span>{formatCurrency(budget)}</span>
        </p>
      </div>
    </div>
  );
};

export default BudgetControl;
