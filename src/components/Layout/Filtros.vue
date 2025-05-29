<template>
  <div
    class="flex flex-col lg:flex-row items-center justify-center gap-2 pb-2 bg-[var(--color-grey-page)] dark:bg-[var(--color-black)] w-full"
  >
    <div class="flex flex-col items-center justify-center h-full mb-1 lg:mb-0 lg:mr-6 lg:w-auto w-full">
      <h2 class="text-3xl font-semibold text-[var(--color-black)] dark:text-[var(--color-white)] mt-2 whitespace-nowrap text-center">
        Notas creadas
      </h2>
      <span class="text-xs text-[var(--color-semi-black)] dark:text-[var(--color-grey)] mt-1 text-center opacity-70">
        {{ filteredNotesCount }} de {{ totalNotesCount }} notas
      </span>
      <hr class="border-2 border-[var(--color-blue)] dark:border-[var(--color-blue-strong)] w-44 mt-1" />
    </div>
    <div
      class="flex flex-col md:flex-row items-center gap-4 md:gap-6 md:justify-center px-3 md:px-0 lg:w-auto w-full"
    >
      <div
        class="flex flex-row gap-2 md:gap-4 justify-center min-w-0 w-full max-w-full md:max-w-[500px] mx-auto"
      >
        <GeneralSelect
          label="Prioridad"
          id="priorityFilter"
          :options="['Todas', 'Sin Prioridad', 'Alta', 'Media', 'Baja']"
          v-model="selectedPriority"
          @change="emitFilter"
          class="w-1/2 min-w-[110px] max-w-[180px] p-2 text-base md:w-44 md:p-5 md:text-base"
        />
        <GeneralSelect
          label="Etiquetas"
          id="tagsFilter"
          :options="uniqueTags"
          v-model="selectedTag"
          @change="emitFilter"
          class="w-1/2 min-w-[110px] max-w-[180px] p-2 text-base md:w-44 md:p-5 md:text-base"
        />
      </div>
      <div
        class="flex flex-row gap-1 md:gap-4 justify-center items-center min-w-0 w-full max-w-full md:max-w-[500px] md:mx-auto"
      >
        <SearchInput
          v-model="searchQuery"
          @input="emitSearch"
          class="mb-5 md:mb-0 w-full sm:w-60 md:w-44 p-2 text-base md:p-5 md:text-base"
        />
        <button
          @click="toggleShowFavorites"
          :aria-label="showFavorites ? 'Mostrar todas las notas' : 'Mostrar solo favoritas'"
          class="p-1 rounded transition flex items-center mr-1 md:mr-3 md:mt-6 bg-transparent"
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-7 h-7 md:w-8 md:h-8 transition-colors"
            :class="showFavorites ? 'text-yellow-400' : 'text-gray-400'"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.873 6.9-1.002L12 2.25l3.093 6.997 6.9 1.002-5 4.873 1.179 6.873z"/>
          </svg>
        </button>
        <div class="flex flex-row items-center gap-1 md:mt-6">
          <span class="mr-1 text-xs md:text-base text-[var(--color-black)] dark:text-[var(--color-white)] whitespace-nowrap">Por fecha:</span>
          <button
            @click="setOrder('Más reciente')"
            :aria-label="'Ordenar por más reciente'"
            class="p-1 rounded transition"
            :class="orderBy === 'Más reciente' ? 'bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]' : 'hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
              :class="orderBy === 'Más reciente' ? 'text-[var(--color-black)] dark:text-[var(--color-white)]' : 'text-[var(--color-semi-black)] dark:text-[var(--color-grey)]'"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            @click="setOrder('Más antiguo')"
            :aria-label="'Ordenar por más antiguo'"
            class="p-1 rounded transition"
            :class="orderBy === 'Más antiguo' ? 'bg-[var(--color-blue-medium)] dark:bg-[var(--color-blue-strong)]' : 'hover:bg-[var(--color-grey)] dark:hover:bg-[var(--color-semi-black)]'"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
              :class="orderBy === 'Más antiguo' ? 'text-[var(--color-black)] dark:text-[var(--color-white)]' : 'text-[var(--color-semi-black)] dark:text-[var(--color-grey)]'"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";
import GeneralSelect from "../Forms/GeneralSelect.vue";
import SearchInput from "../Forms/SearchInput.vue";
import { useUniqueTags } from "../../composables/useTags";

const props = defineProps({
  notes: {
    type: Array,
    default: () => [],
  },
  filteredNotesCount: {
    type: Number,
    default: 0,
  },
  totalNotesCount: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["filter", "search", "order", "toggleFavorites"]);

const selectedPriority = ref("Todas");
const selectedTag = ref("Todas");
const searchQuery = ref("");
const orderBy = ref("Más reciente");
const showFavorites = ref(false);

const notesRef = computed(() => props.notes);
const uniqueTags = useUniqueTags(notesRef);

const emitFilter = () => {
  emit("filter", { priority: selectedPriority.value, tag: selectedTag.value });
};

const emitSearch = () => {
  emit("search", searchQuery.value);
};

const setOrder = (order) => {
  orderBy.value = order;
  emit("order", orderBy.value);
};

const toggleShowFavorites = () => {
  showFavorites.value = !showFavorites.value;
  emit("toggleFavorites", showFavorites.value);
};
</script>
