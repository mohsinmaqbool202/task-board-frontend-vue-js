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
      <FormButton type="submit">Reset Password</FormButton>
      <p class="login-link">
        Back to <router-link to="/auth/login">Login</router-link>
      </p>
    </Form>
  </GuestLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import { Form } from "vee-validate";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { resetPassword } from "@/services/auth";
import GuestLayout from "@/layouts/GuestLayout.vue";
import FormInput from "@/components/form/FormInput.vue";
import FormButton from "@/components/form/FormButton.vue";
import { notify } from "@kyvg/vue3-notification";

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
  resetPassword(form).then(() => {
    notify({
      title: "Password reset",
      text: "Your password has been reset",
      type: "success",
    });
    router.push("/auth/login");
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
