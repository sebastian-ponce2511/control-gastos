import { formatDate } from "../helpers/formatDate";
import SavingsIcon from "../img/icono_ahorro.svg";
import HouseIcon from "../img/icono_casa.svg";
import FoodIcon from "../img/icono_comida.svg";
import ExpIcon from "../img/icono_gastos.svg";
import LeisureIcon from "../img/icono_ocio.svg";
import HelathIcon from "../img/icono_salud.svg";
import SubsIcon from "../img/icono_suscripciones.svg";

const Expense = ({
  exp,
  setModal,
  saveExpenses,
  setSaveExpenses,
  setEditExpense,
  filteredExp,
  setFilteredExp,
}) => {
  const { expense, qty, category, id, date } = exp;

  const handleEdit = () => {
    setModal(true);
    setEditExpense(exp);
  };

  const handleDelete = () => {
    const confirmation = confirm(`¿Desea eliminar el gasto: ${exp.expense}?`);
    if (confirmation) {
      const deleteExp = saveExpenses.filter((dltExp) => dltExp.id !== id);
      setSaveExpenses(deleteExp);
      if (confirmation) {
        const deleteExp = filteredExp.filter((dltExp) => dltExp.id !== id);
        setFilteredExp(deleteExp);
      }
    }
  };

  const iconList = {
    ahorro: SavingsIcon,
    casa: HouseIcon,
    comida: FoodIcon,
    gastos: ExpIcon,
    ocio: LeisureIcon,
    salud: HelathIcon,
    suscripciones: SubsIcon,
  };

  return (
    <>
      <div className="exp-container">
        <img className="exp-icon" src={iconList[category]} alt="icon" />
        <div className="exp-info">
          <p className="exp-info-cat">{category}</p>
          <p className="exp-info-name">{expense}</p>
          <p className="exp-info-date">
            Agregado el:{" "}
            <span className="exp-info-span">{formatDate(date)}</span>
          </p>
        </div>
        <div className="exp-qty">
          <p>${qty}</p>
        </div>
        <div className="buttons">
          <input
            onClick={handleEdit}
            className="btn-edit"
            type="button"
            value="Editar"
          />
          <input
            onClick={handleDelete}
            className="btn-delete"
            type="button"
            value="Eliminar"
          />
        </div>
      </div>
    </>
  );
};

export default Expense;
