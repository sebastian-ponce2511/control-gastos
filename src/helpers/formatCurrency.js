export const formatCurrency = (qty) => {
  return qty.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
  });
};
