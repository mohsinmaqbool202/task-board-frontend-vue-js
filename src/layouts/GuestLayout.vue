<template>
    <div class="guest-layout">
        <slot />
    </div>
</template>

<script setup></script>

<style scoped>
.guest-layout {
    max-width: 400px;
    margin: 4rem auto;
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>