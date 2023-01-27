import { useState } from "react";
import Error from "./Error";

const NewBudget = ({ budget, setBudget, setIsValidBudget }) => {
  const [errorMsg, setErrorMsg] = useState(false);

  const handleBudget = (e) => {
    e.preventDefault();
    if (!budget || budget < 0) {
      setErrorMsg(true);
    } else {
      setErrorMsg(false);
      setIsValidBudget(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleBudget}>
        <label className="budget-label" htmlFor="budget">
          Definir Presupuesto
        </label>
        {errorMsg && (
          <Error>
            <p>Ingresa un número válido</p>
          </Error>
        )}
        <input
          className="budget-input"
          type="number"
          placeholder="$0.00"
          value={budget}
          onChange={(e) => setBudget(Number(e.target.value))}
        />
        <input className="budget-submit" type="submit" value="Agregar" />
      </form>
    </div>
  );
};

export default NewBudget;
