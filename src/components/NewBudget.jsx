const NewBudget = () => {
  return (
    <div>
      <form>
        <label className="budget-label" htmlFor="budget">
          Definir Presupuesto
        </label>
        <input className="budget-input" type="text" placeholder="$0.00" />
        <input className="budget-submit" type="submit" value="Agregar" />
      </form>
    </div>
  );
};

export default NewBudget;
