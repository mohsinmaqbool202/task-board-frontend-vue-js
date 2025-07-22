<template>
  <button
    :type="type"
    class="form-button"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.form-button {
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  background-color: #3b82f6;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
}
.form-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.form-button:hover:not(:disabled) {
  background-color: #2563eb;
}
</style>