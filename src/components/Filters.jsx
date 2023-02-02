const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <form>
        <div className="filter-box">
          <label className="filter-label">Filtrar Gastos</label>
          <select
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">-- Mostrar todas las categorías --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
