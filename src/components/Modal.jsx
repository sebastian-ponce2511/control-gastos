import { useEffect, useState } from "react";
import { generateId } from "../helpers/generateId";
import CloseBtn from "../img/cerrar.svg";
import Error from "./Error";

const Modal = ({
  setModal,
  saveExpenses,
  setSaveExpenses,
  editExpense,
  setEditExpense,
}) => {
  const [expense, setExpense] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");
  const [errorForm, setErrorForm] = useState(false);
  const [id, setId] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setExpense(editExpense.expense);
      setQty(editExpense.qty);
      setCategory(editExpense.category);
      setId(editExpense.id);
      setDate(editExpense.date);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([expense, qty, category].includes("")) {
      setErrorForm(true);
      return;
    }

    const expObject = { expense, qty, category, id, date };
    if (expObject.id) {
      const updtExp = saveExpenses.map((expState) =>
        expState.id === expObject.id ? expObject : expState
      );
      setSaveExpenses(updtExp);
      setModal(false);
    } else {
      setErrorForm(false);

      expObject.id = generateId();
      expObject.date = new Date();
      setSaveExpenses([...saveExpenses, expObject]);
      setModal(false);
    }
  };

  const handleCloseBtn = () => {
    setModal(false);
    setEditExpense({});
  };

  return (
    <div className="modal">
      <img
        className="close-btn"
        src={CloseBtn}
        alt="close-btn"
        onClick={handleCloseBtn}
      />
      <div className="modal-form container">
        <h2 className="modal-title">
          {editExpense.expense ? "Editar gasto" : "Nuevo gasto"}
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <label>Nombre del gasto</label>
            <input
              type="text"
              placeholder="Ej: Comida"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
            />
          </div>
          <div>
            <label>Monto</label>
            <input
              type="number"
              placeholder="Ingresa un monto"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Categoría</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">-- Seleccione --</option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>
          <input
            className="modal-form-btn"
            type="submit"
            value={editExpense.expense ? "Editar gasto" : "Agregar Gasto"}
          />
          {errorForm && (
            <Error>{<p>Todos los campos son obligatorios</p>}</Error>
          )}
        </form>
      </div>
    </div>
  );
};

export default Modal;
