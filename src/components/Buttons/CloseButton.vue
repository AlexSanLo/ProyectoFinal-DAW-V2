<template>
  <section>
    <button
      @click="closeModal"
      class="px-4 py-2 bg-[var(--color-red)] hover:bg-[var(--color-black)] text-[var(--color-white)] font-semibold rounded-lg shadow-md"
    >
      Volver
    </button>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["close"]);

const closeModal = () => {
  emit("close");
};
</script>
