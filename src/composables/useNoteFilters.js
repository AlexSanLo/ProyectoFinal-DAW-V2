import { computed } from "vue";

export default function useNoteFilters(notes, filterPriority, filterTag, searchQuery, orderBy) {
  return computed(() => {
    let filtered = notes.value.filter(note => {
      const notePriority = note.priority || "Sin Prioridad";
      const matchesPriority =
        filterPriority.value === "Todas" ||
        notePriority === filterPriority.value;

      const matchesTag =
        filterTag.value === "Todas" ||
        (note.etiquetas &&
          note.etiquetas
            .split(",")
            .map(t => t.trim().toLowerCase())
            .includes(filterTag.value.trim().toLowerCase()));

      const matchesSearch =
        !searchQuery.value ||
        note.title?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        note.description?.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        note.etiquetas?.toLowerCase().includes(searchQuery.value.toLowerCase());

      return matchesPriority && matchesTag && matchesSearch;
    });

    if (orderBy && orderBy.value) {
      filtered = filtered.slice().sort((a, b) => {
        if (orderBy.value === "Más reciente") {
          return new Date(b.timestamp) - new Date(a.timestamp);
        } else {
          return new Date(a.timestamp) - new Date(b.timestamp);
        }
      });
    }

    return filtered;
  });
}