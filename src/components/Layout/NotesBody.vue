<template>
  <div class="flex flex-col items-center pb-40 md:pb-0 w-full max-w-full overflow-x-hidden bg-[var(--color-grey-page)] dark:bg-[var(--color-black)]">
    <ThemeToggle /> 
    <button
      @click="openModal(null, null)"
      class="fixed bottom-24 right-6 md:bottom-24 md:right-16 rounded-full 
             w-12 h-12 md:w-16 md:h-16 
             bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)] 
             text-[var(--color-black)] dark:text-[var(--color-white)] flex items-center justify-center gap-2 shadow-lg z-50"
    >
      <svg class="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" :class="'text-[var(--color-black)] dark:text-[var(--color-white)]'" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M12 5v14m7-7H5" />
      </svg>
    </button>

    <AddNoteModal 
      :isModalOpen="isModalOpen" 
      :noteData="currentNote" 
      :editIndex="editIndex"
      @close="closeModal" 
      @saveSuccess="handleSaveSuccess" 
    />

    <Filtros
      :notes="notes"
      :filteredNotesCount="filteredNotes.length"
      :totalNotesCount="notes.length"
      @filter="onFilter"
      @search="onSearch"
      @order="onOrder"
      @toggleFavorites="onToggleFavorites"
    />

    <NotesList 
      :filteredNotes="filteredNotes"
      @showDetail="openDetailModal"
      @delete="deleteNoteById"
      @edit="editNoteById"
      @toggleFavorite="toggleFavoriteById"
    />

    <NoteDetailModal
      v-if="isDetailModalOpen"
      :note="selectedNote"
      @close="isDetailModalOpen = false"
      @edit="editNoteById(selectedNote.id)"
      @delete="deleteNoteById(selectedNote.id)"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import ThemeToggle from "../ThemeToggle/ThemeToggle.vue"; 
import AddNoteModal from "../Modals/AddNoteModal.vue";
import Filtros from "../Layout/Filtros.vue";
import NotesList from "../Layout/NotesList.vue";
import NoteDetailModal from "../Modals/NoteDetailModal.vue";
import useNotes from "../../composables/useNotes";
import useNoteFilters from "../../composables/useNoteFilters";

const { notes, loadNotes, addNote, updateNote, deleteNote: removeNote } = useNotes();

const isModalOpen = ref(false);
const currentNote = ref({});
const editIndex = ref(null);

const filterPriority = ref("Todas");
const filterTag = ref("Todas");
const searchQuery = ref("");
const orderBy = ref("Más reciente");
const showFavorites = ref(false);

const filteredNotesRaw = useNoteFilters(notes, filterPriority, filterTag, searchQuery, orderBy);

const filteredNotes = computed(() =>
  showFavorites.value
    ? filteredNotesRaw.value.filter(note => note.favorita)
    : filteredNotesRaw.value
);

function onFilter({ priority, tag }) {
  filterPriority.value = priority;
  filterTag.value = tag;
}

function onSearch(query) {
  searchQuery.value = query;
}

function onOrder(order) {
  orderBy.value = order;
}

function onToggleFavorites(val) {
  showFavorites.value = val;
}

function openModal(note = null, index = null) {
  if (note) {
    currentNote.value = { ...note };
    editIndex.value = note.id; 
  } else {
    currentNote.value = {
      title: "",
      etiquetas: "",
      description: "",
      priority: "Sin Prioridad",
      timestamp: "",
      favorita: false, 
    };
    editIndex.value = null;
  }
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

function handleSaveSuccess({ note, index }) {
  if (index !== null && index !== undefined) {
    updateNote(note, index); 
    closeModal();
  } else {
    addNote(note)
      .then(() => closeModal())
      .catch(() => {}); 
  }
}

function deleteNoteById(id) {
  removeNote(id);
}

function editNoteById(id) {
  const note = notes.value.find(n => n.id === id);
  if (note) openModal(note, id);
}

function toggleFavoriteById(id) {
  const note = notes.value.find(n => n.id === id);
  if (note) {
    const updatedNote = { ...note, favorita: !note.favorita };
    updateNote(updatedNote, id);
  }
}

const isDetailModalOpen = ref(false);
const selectedNote = ref(null);

function openDetailModal(note) {
  selectedNote.value = note;
  isDetailModalOpen.value = true;
}

onMounted(loadNotes);
</script>
