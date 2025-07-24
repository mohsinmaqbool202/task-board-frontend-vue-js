<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal-content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <div class="modal-actions">
        <button class="btn cancel" @click="$emit('cancel')">Cancel</button>
        <button class="btn confirm" @click="$emit('confirm')">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  visible: Boolean,
  title: {
    type: String,
    default: "Are you sure?",
  },
  message: {
    type: String,
    default: "Do you really want to proceed?",
  },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}
.modal-content {
  background: #fff;
  padding: 2rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  min-width: 320px;
  max-width: 90vw;
  text-align: center;
}
.modal-actions {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.btn {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
.btn.cancel {
  background: #e5e7eb;
  color: #333;
}
.btn.cancel:hover {
  background: #d1d5db;
}
.btn.confirm {
  background: #ef4444;
  color: #fff;
}
.btn.confirm:hover {
  background: #dc2626;
}
</style>