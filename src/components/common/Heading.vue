<template>
  <div class="heading-wrapper">
    <h1>{{ title }}</h1>
    <router-link
      v-if="showButton && buttonRoute"
      :to="buttonRoute"
      class="action-btn"
      :style="{ background: buttonColor }"
    >
      {{ buttonText }}
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  showButton: {
    type: Boolean,
    default: false,
  },
  buttonRoute: {
    type: String,
    default: "",
  },
  buttonText: {
    type: String,
    default: "Add",
  },
  buttonColor: {
    type: String,
    default: "#2563eb", // Default blue
  },
});
</script>

<style scoped>
.heading-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
h1 {
  margin-top: 0px;
}
.action-btn {
  padding: 6px 18px;
  border-radius: 6px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
  border: none;
  outline: none;
  display: inline-block;
}
.action-btn:hover {
  filter: brightness(0.9);
}
</style>