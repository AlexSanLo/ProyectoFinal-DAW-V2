<template>
  <div class="flex flex-col space-y-2">
    <label :for="id" class="text-md text-[var(--color-black)] dark:text-[var(--color-white)]">{{ label }}:</label>
    <select
      :id="id"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="border border-[var(--color-black)] rounded-2xl p-2 text-base bg-[var(--color-white)] text-[var(--color-black)] dark:bg-[var(--color-white)] dark:text-[var(--color-semi-black)] focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  label: String,
  id: String,
  options: Array,
  modelValue: String,
});
</script>
