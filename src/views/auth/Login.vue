<template>
  <GuestLayout>
    <h2 class="title">Login</h2>
    <Form
      class="form"
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <FormControl
        v-model="form.email"
        type="email"
        name="email"
        autocomplete="email"
        placeholder="Email"
        :schema="schema"
        :errors="errors"
      />
      <FormControl
        v-model="form.password"
        type="password"
        name="password"
        placeholder="Password"
        autocomplete="current-password"
        :schema="schema"
        :errors="errors"
      />
      <FormButton type="submit">Login</FormButton>
      <!-- <p class="forgot-password">Forgot password?</p> -->
      <p class="register-link">Don't have an account? <router-link to="/register">Register</router-link></p>
    </Form>
  </GuestLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Form } from "vee-validate";
import { useRouter } from 'vue-router'
import { login } from "@/services/auth";
import { useAuthStore } from '@/stores/auth'
import GuestLayout from "@/layouts/GuestLayout.vue";
import FormControl from "@/components/form/FormControl.vue";
import FormButton from "@/components/form/FormButton.vue";
import { notify } from "@kyvg/vue3-notification";

const router = useRouter()
const authStore = useAuthStore()

const form = reactive({
  email: "",
  password: "",
});
const schema = ref({
  email: "required|email",
  password: "required",
});

const submit = () => {
  login(form)
    .then(({ data }) => {
      authStore.setUserData(data);
      router.push("/");
    });
};
</script>

<style scoped>
.title {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #333;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
