<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <img src="/src/assets/vue.svg" alt="Logo" class="logo" />
      Task Board
    </div>
    <div class="navbar-menu">
      <div class="dropdown" @click="toggleDropdown">
        <span class="dropdown-toggle">Menu ▼</span>
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
  router.push('/auth/login');
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(90deg, #4f8cff 0%, #3358e0 100%);
  color: #fff;
  padding: 1rem 2rem;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
}
.logo {
  width: 32px;
  height: 32px;
  margin-right: 0.75rem;
  vertical-align: middle;
}
.navbar-brand {
  font-weight: bold;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
}
.navbar-menu {
  position: relative;
}
.dropdown-toggle {
  cursor: pointer;
  padding: 0.5rem 1rem;
  background: #fff2;
  border-radius: 6px;
  transition: background 0.2s;
}
.dropdown-toggle:hover {
  background: #fff4;
}
.dropdown-menu {
  position: absolute;
  right: 0;
  top: 2.5rem;
  background: #fff;
  color: #2d3748;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  min-width: 120px;
  box-shadow: 0 2px 12px rgba(44, 62, 80, 0.12);
  z-index: 10;
}
.dropdown-menu a {
  display: block;
  padding: 0.75rem 1rem;
  color: inherit;
  text-decoration: none;
  border-radius: 6px;
  transition: background 0.2s;
}
.dropdown-menu a:hover {
  background: #f0f4f8;
}
</style>