<script setup>
  import { RouterView } from 'vue-router'
  import Loader from '@/components/common/Loader.vue'
  import { useLoaderStore } from '@/stores/loader'
</script>

<template>
  <Notifications />
  <div class="loader-overlay" v-if="useLoaderStore().loading"><Loader /></div>
  <RouterView />
</template>
