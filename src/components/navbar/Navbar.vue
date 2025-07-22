<template>
  <nav class="navbar">
    <div class="navbar-brand">Task Board</div>
    <div class="navbar-menu">
      <div class="dropdown" @click="toggleDropdown">
        <span class="dropdown-toggle">{{ authStore.user.name }}</span>
        <div v-if="dropdownOpen" class="dropdown-menu">
          <a href="#" @click.prevent="logout">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter();
const authStore = useAuthStore();

const dropdownOpen = ref(false);

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value;
}

function logout() {
    authStore.clearUserData();
    router.push('/login');
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2d3748;
  color: #fff;
  padding: 1rem 2rem;
}
.navbar-brand {
  font-weight: bold;
  font-size: 1.2rem;
}
.navbar-menu {
  position: relative;
}
.dropdown-toggle {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: #4a5568;
  border-radius: 4px;
}
.dropdown-menu {
  position: absolute;
  right: 0;
  top: 2.5rem;
  background: #fff;
  color: #2d3748;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  min-width: 120px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 10;
}
.dropdown-menu a {
  display: block;
  padding: 0.75rem 1rem;
  color: inherit;
  text-decoration: none;
}
.dropdown-menu a:hover {
  background: #f7fafc;
}
</style>