<template>
  <div
    class="flex flex-col p-4 rounded-lg shadow-md w-full max-w-[420px] mx-auto min-h-[180px] md:min-h-[200px] relative mb-8 bg-[var(--color-white)] dark:bg-[var(--color-grey)] cursor-pointer"
    @click="handleShowDetail"
  >
    <div
      :class="priorityClass"
      class="absolute left-0 top-0 bottom-0 w-4 rounded-l-lg h-full z-10"
    ></div>

    <div class="absolute top-2 right-2 z-20">
      <button
        @click.stop="toggleFavorite"
        class="p-1 rounded-full focus:outline-none bg-transparent"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 transition-colors"
          :class="note.favorita ? 'text-yellow-400' : 'text-gray-400'"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"
          />
        </svg>
      </button>
    </div>

    <div class="flex flex-col flex-grow ml-6 h-full justify-between relative z-10">
      <h3
        class="text-2xl font-bold text-[var(--color-blue-strong)] dark:text-[var(--color-blue-strong)] mt-0 overflow-hidden whitespace-nowrap text-ellipsis pr-12"
        style="text-overflow: ellipsis; overflow-wrap: normal"
        :title="note.title"
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
      >
        {{ note.title }}
      </h3>

      <p
        class="mb-3 text-md text-[var(--color-black)] dark:text-[var(--color-black)] mt-2 whitespace-pre-line break-words overflow-y-auto max-h-24"
      >
        {{ note.description }}
      </p>

      <div class="flex flex-col mt-auto">
        <p
          class="text-sm text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)] truncate overflow-hidden whitespace-nowrap max-w-[50%]"
          :title="note.etiquetas"
        >
          {{ note.etiquetas }}
        </p>
        <p
          v-if="note.reminder && note.reminder.active"
          class="text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"
        >
          <span>🔔</span>
          <span v-if="note.reminder.date" class="ml-1">{{ formatDate(note.reminder.date) }}</span>
          <span v-else class="ml-1">Recordatorio activo</span>
        </p>
        <p
          class="text-xs text-[var(--color-semi-black)] dark:text-[var(--color-semi-black)]"
        >
          {{ formatDate(note.timestamp) }}
        </p>
      </div>
    </div>

    <div class="absolute bottom-3 right-3 flex gap-2 z-20">
      <button
        @click.stop="$emit('edit')"
        class="px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-blue-strong)] dark:bg-[var(--color-blue-strong)] text-[var(--color-white)]"
      >
        Editar
      </button>
      <button
        @click.stop="$emit('delete')"
        class="px-3 py-2 rounded-md text-sm hover:opacity-90 bg-[var(--color-red)] text-[var(--color-white)]"
      >
        Eliminar
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed, ref } from "vue";
import { formatDate } from "../../composables/useDate";

const props = defineProps({
  note: Object,
});

const emit = defineEmits(["delete", "edit", "toggleFavorite", "showDetail"]);

const showTooltip = ref(false);

function handleShowDetail() {
  emit("showDetail", props.note);
}

function toggleFavorite() {
  emit("toggleFavorite", props.note.id);
}

const priorityClass = computed(() => {
  switch (props.note.priority) {
    case "Alta":
      return "bg-[var(--color-red)]";
    case "Media":
      return "bg-[var(--color-yellow)]";
    case "Baja":
      return "bg-[var(--color-blue-medium)]";
    default:
      return "bg-gray-500";
  }
});
</script>
