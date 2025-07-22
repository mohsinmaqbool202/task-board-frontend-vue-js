<template>
  <div class="not-found-wrapper">
    <div class="not-found-content">
      <h1 class="not-found-title">404</h1>
      <p class="not-found-message">Oops! The page you're looking for doesn't exist.</p>
      <RouterLink class="home-button" to="/">Go to Homepage</RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found-wrapper {
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f0f4ff, #fafafa);
  padding: 2rem;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.not-found-content {
  max-width: 400px;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.not-found-title {
  font-size: 5rem;
  color: #3b82f6;
  margin-bottom: 1rem;
}

.not-found-message {
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 2rem;
}

.home-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s ease;
}

.home-button:hover {
  background-color: #2563eb;
}
</style>
