import { computed } from "vue";

export function useUniqueTags(notes) {
  return computed(() => {
    const allTags = notes.value
      .flatMap(note => note.etiquetas ? note.etiquetas.split(",") : [])
      .map(tag => tag.trim())
      .filter(tag => tag);

    return ["Todas", ...new Set(allTags)];
  });
}