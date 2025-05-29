<template>
  <div class="w-full">
    <label for="searchBox" class="block mb-1 text-[var(--color-black)] dark:text-[var(--color-white)]">
      Buscar notas:
    </label>
    <input 
      id="searchBox"
      type="text"
      v-model="searchValue"
      @input="emitSearch"
      placeholder="Buscar..."
      class="border border-[var(--color-black)] rounded-2xl p-2 text-base w-full bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-black)]"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});

const emit = defineEmits(["update:modelValue", "search"]);

const searchValue = ref(props.modelValue || "");

const emitSearch = () => {
  emit("update:modelValue", searchValue.value);
  emit("search", searchValue.value);
};
</script>
