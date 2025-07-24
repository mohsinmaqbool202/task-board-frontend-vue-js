<template>
  <button
    :class="['form-btn', variant, color]"
    :type="type"
    @click.stop="handleClick"
  >
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(['click']);

defineProps({
  type: { type: String, default: 'button' },
  variant: { type: String, default: 'filled' }, 
  color: { type: String, default: 'primary' },
})

function handleClick(event) {
  emit('click', event);
}
</script>

<style scoped>
.form-btn {
  padding: 8px 18px;
  border-radius: 6px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.filled.primary { background: #2563eb; color: #fff; }
.filled.danger { background: #dc2626; color: #fff; }
.outlined.primary { background: #fff; color: #2563eb; border: 1.5px solid #2563eb; }
.outlined.danger { background: #fff; color: #dc2626; border: 1.5px solid #dc2626; }
.form-btn:active { opacity: 0.85; }
</style>