<template>
  <GuestLayout>
    <h2 style="text-align: center;">Login</h2>
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
      <FormInput
        v-model="form.password"
        type="password"
        name="password"
        placeholder="Password"
        autocomplete="current-password"
        :schema="schema"
        :errors="errors"
      />
      <FormButton type="submit">Login</FormButton>
      <p class="register-link">Don't have an account? <router-link to="/auth/register">Register</router-link></p>
      <p class="forgot-password">Forgot password? <router-link to="/auth/forgot-password">Reset password</router-link></p>
    </Form>
  </GuestLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Form } from "vee-validate";
import { useRouter } from 'vue-router'
import { login } from "@/services/auth";
import { useAuthStore } from '@/stores/auth'
import { useLoaderStore } from "@/stores/loader";
import GuestLayout from "@/layouts/GuestLayout.vue";
import FormInput from "@/components/form/FormInput.vue";
import FormButton from "@/components/form/FormButton.vue";


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
  useLoaderStore().loading = true
  login(form)
    .then(({ data }) => {
      authStore.setUserData(data);
      router.push("/");
    }).finally(() => {
      useLoaderStore().loading = false
    });
};
</script>

<style scoped>
</style>
