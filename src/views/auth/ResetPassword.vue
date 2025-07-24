<template>
  <GuestLayout>
    <h2 class="title">Set your password</h2>
    <Form
      class="form"
      @submit="submit"
      :validation-schema="schema"
      v-slot="{ errors }"
    >
      <FormInput
        v-model="form.password"
        type="password"
        name="password"
        placeholder="Password"
        autocomplete="new-password"
        :schema="schema"
        :errors="errors"
      />
      <FormInput
        v-model="form.confirm_password"
        type="password"
        name="confirm_password"
        placeholder="Confirm Password"
        autocomplete="password-confirmation"
        :schema="schema"
        :errors="errors"
      />
      <FormButton type="submit">Set Password</FormButton>
      <p class="login-link">
        Back to <router-link to="/auth/login">Login</router-link>
      </p>
    </Form>
  </GuestLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Form } from "vee-validate";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
import { resetPassword } from "@/services/auth";
import { notify } from "@kyvg/vue3-notification";
import { useLoaderStore } from "@/stores/loader";
import GuestLayout from "@/layouts/GuestLayout.vue";
import FormInput from "@/components/form/FormInput.vue";
import FormButton from "@/components/form/FormButton.vue";

const router = useRouter();
const route = useRoute();

const form = reactive({
  token: route.query.token,
  password: "",
  confirm_password: "",
});
const schema = ref({
  password: "required|min:8",
  confirm_password: "required|confirmed:password",
});

const submit = () => {
  useLoaderStore().loading = true
  resetPassword(form).then(() => {
    notify({
      type: "success",
      title: "Password set",
      text: "Your password has been set successfully",
    });
    router.push("/auth/login");
  }).finally(() => {
    useLoaderStore().loading = false
  });
};
</script>

<style scoped>
</style>