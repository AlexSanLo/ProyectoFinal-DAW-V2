<template>
  <section
    v-if="isModalOpen"
    ref="modalSection"
    class="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    @mousedown.self="closeModal"
    @keydown.esc="closeModal"
    tabindex="0"
  >
    <div
      class="p-4 rounded-lg w-[95vw] max-w-md md:max-w-3xl mx-2 md:mx-auto relative bg-[var(--color-white)] dark:bg-[var(--color-semi-black)] border border-[var(--color-semi-black)] shadow-lg"
    >
      <button
        @click="closeModal"
        class="absolute top-2 right-2 text-xl font-bold text-[var(--color-black)] dark:text-[var(--color-white)]"
      >
        &times;
      </button>
      <h2 class="text-2xl font-semibold mb-0 text-[var(--color-black)] dark:text-[var(--color-white)]">
        {{ editIndex !== null ? "Editar Nota" : "Crear una nueva nota" }}
      </h2>
      <hr class="w-1/3 border-2 mb-4 border-[var(--color-blue)]" />
      <div class="space-y-4">
        <GeneralSelect
          label="Prioridad"
          id="noteType"
          :options="['Alta', 'Media', 'Baja', 'Sin Prioridad']"
          v-model="noteType"
        />
        <div class="flex gap-2 w-full">
          <div class="w-1/2 min-w-0">
            <GeneralInput
              label="Título"
              id="noteTitle"
              type="text"
              placeholder="Título..."
              v-model="noteTitle"
              class="w-full text-sm"
              label-class="text-xs"
            />
          </div>
          <div class="w-1/2 min-w-0">
            <GeneralInput
              label="Etiquetas"
              id="noteEtiquetas"
              type="text"
              placeholder="Etiquetas..."
              v-model="noteEtiquetas"
              class="w-full text-sm"
              label-class="text-xs"
            />
            <sub class="block text-xs text-gray-500 mt-1">Separadas por coma (,)</sub>
          </div>
        </div>
        <GeneralInput
          label="Descripción"
          id="noteDescription"
          type="textarea"
          placeholder="Descripción..."
          v-model="noteDescription"
        />
        <div class="space-y-2">
          <div class="flex items-center gap-2">
            <input type="checkbox" id="noteReminder" v-model="noteReminderActive" class="w-4 h-4" />
            <label for="noteReminder" class="text-[var(--color-black)] dark:text-[var(--color-white)]">
              Añadir recordatorio
            </label>
          </div>
          <div v-if="noteReminderActive">
            <GeneralInput
              label="Fecha y Hora del recordatorio"
              id="noteReminderDate"
              type="datetime-local"
              v-model="noteReminderDate"
            />
          </div>
        </div>
      </div>
      <div class="flex justify-between mt-6">
        <SaveButton
          :inputs="{
            noteTitle: noteTitle,
            noteEtiquetas: noteEtiquetas,
            noteDescription: noteDescription,
            timestamp: noteTimestamp,
            index: editIndex,
            favorita: noteFavorita
          }"
          :selectValue="noteType"
          @saveSuccess="handleSaveSuccess"
        />
        <CloseButton @close="closeModal" class="ml-auto" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits, nextTick } from "vue"
import GeneralSelect from "../Forms/GeneralSelect.vue"
import GeneralInput from "../Forms/GeneralInput.vue"
import CloseButton from "../Buttons/CloseButton.vue"
import SaveButton from "../Buttons/SaveButton.vue"
import { validateNote } from "../../composables/useNoteValidation"

const props = defineProps({
  isModalOpen: Boolean,
  noteData: Object,
  editIndex: Number
})

const emit = defineEmits(["close", "saveSuccess"])

const noteTitle = ref("")
const noteEtiquetas = ref("")
const noteDescription = ref("")
const noteType = ref("Sin Prioridad")
const noteTimestamp = ref("")
const noteFavorita = ref(false)
const noteReminderActive = ref(false)
const noteReminderDate = ref("")
const modalSection = ref(null)

watch(() => props.noteData, (newData) => {
  if (newData) {
    noteTitle.value = newData.title
    noteEtiquetas.value = newData.etiquetas
    noteDescription.value = newData.description
    noteType.value = newData.priority || "Sin Prioridad"
    noteTimestamp.value = newData.timestamp
    noteFavorita.value = newData.favorita ?? false
    if (newData.reminder) {
      noteReminderActive.value = newData.reminder.active
      noteReminderDate.value = newData.reminder.date
    } else {
      noteReminderActive.value = false
      noteReminderDate.value = ""
    }
  } else {
    noteType.value = "Sin Prioridad"
    noteFavorita.value = false
    noteReminderActive.value = false
    noteReminderDate.value = ""
  }
}, { immediate: true })

watch(() => props.isModalOpen, (open) => {
  if (open) {
    nextTick(() => {
      modalSection.value?.focus()
    })
  }
})

const closeModal = () => {
  emit("close")
}

const handleSaveSuccess = (payload) => {
  if (!validateNote({
    title: noteTitle.value,
    etiquetas: noteEtiquetas.value,
    description: noteDescription.value,
    priority: noteType.value
  })) {
    alert("Todos los campos son obligatorios.")
    return
  }
  payload.note.favorita = noteFavorita.value
  payload.note.reminder = {
    active: noteReminderActive.value,
    date: noteReminderActive.value ? noteReminderDate.value : ""
  }
  emit("saveSuccess", payload)
  closeModal()
}
</script>
