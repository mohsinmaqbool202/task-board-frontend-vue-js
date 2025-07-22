<template>
  <GuestLayout>
    <div v-if="!isRegistered">
      <h2 class="title">Register</h2>
      <Form
        class="form"
        @submit="submit"
        :validation-schema="schema"
        v-slot="{ errors }"
      >
        <FormControl
          v-model="form.name"
          type="text"
          name="name"
          autocomplete="name"
          placeholder="Name"
          :schema="schema"
          :errors="errors"
        />
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
        <FormButton type="submit">Sign Up</FormButton>
        <p class="login-link">Already have an account? <router-link to="/login">Login</router-link></p>
      </Form>
    </div>
    <VerifyEmail v-else />
  </GuestLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Form } from "vee-validate";
import { useRouter } from "vue-router";
import { register } from "@/services/auth";
import { useAuthStore } from "@/stores/auth";
import VerifyEmail from "@/views/auth/VerifyEmail.vue";
import GuestLayout from "@/layouts/GuestLayout.vue";
import FormControl from "@/components/form/FormControl.vue";
import FormButton from "@/components/form/FormButton.vue";

const authStore = useAuthStore();

const form = reactive({
  name: "",
  email: "",
  password: "",
});

const isRegistered = ref(false);

const schema = ref({
  name: "required",
  email: "required|email",
  password: "required",
});

const submit = () => {
  register(form).then(() => {
    isRegistered.value = true;
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
