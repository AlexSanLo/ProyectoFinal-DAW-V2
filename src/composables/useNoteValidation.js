export function validateNote({ title, etiquetas, description, priority }) {
  if (
    !title?.trim() ||
    !etiquetas?.trim() ||
    !description?.trim() ||
    !priority?.trim()
  ) {
    return false;
  }
  return true;
}