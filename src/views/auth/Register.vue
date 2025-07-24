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
        <FormInput
          v-model="form.name"
          type="text"
          name="name"
          autocomplete="name"
          placeholder="Name"
          :schema="schema"
          :errors="errors"
        />
        <FormInput
          v-model="form.email"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="Email"
          :schema="schema"
          :errors="errors"
        />
        <FormInput
          v-model="form.password"
          type="password"
          name="password"
          placeholder="Password"
          autocomplete="current-password"
          :schema="schema"
          :errors="errors"
        />
        <FormButton type="submit">Sign Up</FormButton>
        <p class="login-link">
          Already have an account?
          <router-link to="/auth/login">Login</router-link>
        </p>
      </Form>
    </div>
    <div v-else>
      <h2>Verify Your Email</h2>
      <p>
        Please check your inbox and click the verification link we sent you.
      </p>
    </div>
  </GuestLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Form } from "vee-validate";
import { register } from "@/services/auth";
import { useAuthStore } from "@/stores/auth";
import GuestLayout from "@/layouts/GuestLayout.vue";
import FormInput from "@/components/form/FormInput.vue";
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
</style>
