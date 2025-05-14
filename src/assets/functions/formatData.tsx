export function formatDate(dateStr: string) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  if (!day) {
    return '-';
  }
  return `${day}/${month}/${year}`;
}
