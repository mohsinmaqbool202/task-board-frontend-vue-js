<template>
  <div class="guest-layout">
    <Navbar />
    <div class="main-content">
      <Sidebar/>
      <div class="content-area">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "@/components/navbar/Navbar.vue";
import Sidebar from "@/components/navbar/Sidebar.vue";
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