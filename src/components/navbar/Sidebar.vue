<template>
  <aside class="sidebar">
    <ul>
      <li
        v-for="item in items"
        :key="item.name"
        :class="{ active: selected === item.name }"
        @click="select(item.name)"
      >
        {{ item.label }}
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  items: Array,
  selected: String,
});
const emit = defineEmits(["select"]);

function select(name) {
  emit("select", name);
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background: #f7fafc;
  border-right: 1px solid #e2e8f0;
  height: 100vh;
  padding-top: 2rem;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar li {
  padding: 1rem;
  cursor: pointer;
  color: #2d3748;
  transition: background 0.2s;
}
.sidebar li.active,
.sidebar li:hover {
  background: #e2e8f0;
  font-weight: bold;
}
</style>