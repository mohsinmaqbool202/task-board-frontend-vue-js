<template>
  <GuestLayout>
    <h2 class="title">Forgot Password</h2>
    <Form
      class="form"
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <FormInput
        v-model="form.email"
        type="email"
        name="email"
        autocomplete="email"
        placeholder="Email"
        :schema="schema"
        :errors="errors"
      />
      <FormButton type="submit">Send Reset Link</FormButton>
      <p class="login-link">
        Back to <router-link to="/auth/login">Login</router-link>
      </p>
    </Form>
  </GuestLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Form } from "vee-validate";
import { sendResetLink } from "@/services/auth";
import { notify } from "@kyvg/vue3-notification";
import { useLoaderStore } from "@/stores/loader";
import GuestLayout from "@/layouts/GuestLayout.vue";
import FormInput from "@/components/form/FormInput.vue";
import FormButton from "@/components/form/FormButton.vue";

const form = reactive({
  email: "",
});

const schema = ref({
  email: "required|email",
});

const submit = () => {
  useLoaderStore().loading = true
  sendResetLink(form).then(() => {
    notify({
      title: "Reset link sent",
      text: "Check your email for the reset link",
      type: "success",
    });
  }).finally(() => {
    useLoaderStore().loading = false
  });
};
</script>

<style scoped>
</style>
