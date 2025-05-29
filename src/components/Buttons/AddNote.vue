<template>
  <div class="flex flex-col items-center pb-40 md:pb-0 w-full bg-[var(--color-grey-page)] dark:bg-[var(--color-black)]">
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

    <AddModal 
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

    <div v-if="filteredNotes.length === 0" class="mt-10 mb-10 text-center text-[var(--color-semi-black)] dark:text-[var(--color-grey)] text-lg">
      ¡No hay notas aún! Pulsa el botón "+" para agregar tu primera nota
    </div>

    <TransitionGroup
      name="note-fade"
      tag="div"
      class="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-2 mt-0 w-full max-w-6xl mx-auto"
    >
      <NoteCard 
        v-for="note in filteredNotes" 
        :key="note.id" 
        :note="note" 
        @showDetail="openDetailModal"
        @delete="deleteNoteById(note.id)"
        @edit="editNoteById(note.id)"
        @toggleFavorite="toggleFavoriteById(note.id)"
      />
    </TransitionGroup>

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
import AddModal from "../Modals/AddNoteModal.vue";
import Filtros from "../Layout/Filtros.vue";
import NoteCard from "../Cards/NoteCard.vue";
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
    editIndex.value = index;
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
 
    note.favorita = !note.favorita;

    updateNote({ ...note }, id);
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
