<template>
  <div class="guest-layout">
    <Navbar />
    <div class="main-content">
      <Sidebar
        :items="sidebarItems"
        :selected="selected"
        @select="selected = $event"
      />
      <div class="content-area">
        <slot :selected="selected" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "@/components/navbar/Navbar.vue";
import Sidebar from "@/components/navbar/Sidebar.vue";

const selected = ref("home");
const sidebarItems = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "contact", label: "Contact" },
];
</script>

<style scoped>
.guest-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.main-content {
  display: flex;
  flex: 1;
}
.content-area {
  flex: 1;
  padding: 2rem;
  background: #fff;
  min-height: 100vh;
}
</style>