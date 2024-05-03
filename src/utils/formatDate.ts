export const formatDate = (date: string) => {
  const newDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return newDate;
};
