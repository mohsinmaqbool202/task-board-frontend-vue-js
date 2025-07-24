<template>
  <div class="verify-email">
    <h2>Email Verification</h2>
    <div v-if="loading">Verifying your email...</div>
    <div v-else>
      <div v-if="success">
        <p>Your email has been verified successfully!</p>
        <FormButton @click="goToLogin">Go to Login</FormButton>
      </div>
      <div v-else>
        <p class="error">Verification failed: {{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "@/plugins/axios";
import { verifyEmail } from "@/services/auth";
import { useRoute, useRouter } from "vue-router";
import FormButton from "@/components/form/FormButton.vue";

const loading = ref(true);
const success = ref(false);
const error = ref(null);

const route = useRoute();
const router = useRouter();

const goToLogin = () => {
  router.push({ name: "login" });
};

onMounted(() => {
  const token = route.query.token;
  if (!token) {
    loading.value = false;
    error.value = "No token provided.";
    return;
  }
  verifyEmail({ token })
    .then(() => {
      success.value = true;
    })
    .catch((err) => {
      error.value = err.response?.data?.message || "Invalid or expired token.";
    })
    .finally(() => {
      loading.value = false;
    });
});
</script>

<style scoped>
.verify-email {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #eee;
  border-radius: 8px;
  text-align: center;
}
.error {
  color: red;
}
</style>