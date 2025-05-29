export function formatDate(timestamp) {
  if (!timestamp) return "Fecha no disponible";
  const date = new Date(timestamp);
  return `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;
}