<template>
  <aside class="sidebar">
    <ul>
      <li
        v-for="item in filteredItems"
        :key="item.name"
        :class="{ active: route.path === item.path }"
        @click="goTo(item.path)"
      >
        {{ item.label }}
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const sidebarItems = [
  { name: "home", label: "Home", roles: ["admin", "manager", "member"], path: "/" },
  { name: "users", label: "Users", roles: ["admin"], path: "/users" },
];

//only show items that the user has access to
const filteredItems = computed(() =>
  sidebarItems.filter(item => item.roles.includes(authStore.user?.role))
)

function goTo(path) {
  router.push(path)
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