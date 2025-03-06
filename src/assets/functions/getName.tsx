export const getNameById = (id: number, array: any) => {
  const selected = array.find((t: any) => t.id === id);
  if (!selected) {
    return '-';
  }
  return selected.name;
};
