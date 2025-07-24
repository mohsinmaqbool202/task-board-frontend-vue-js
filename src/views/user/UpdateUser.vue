<template>
  <AuthenticatedLayout>
    <Heading
      title="Update User"
      :showButton="true"
      buttonRoute="/users"
      buttonText="Back to Users"
      buttonColor="#6b7280"
    />
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
        v-model="form.role"
        type="select"
        name="role"
        :options="roles"
        :schema="schema"
        :errors="errors"
      >
        <template v-slot:options>
          <option value="" disabled selected>Select Role</option>
          <option v-for="role in roles" :key="role.id" :value="role.id">
            {{ role.label }}
          </option>
        </template>
      </FormInput>
      <FormButton type="submit">Update User</FormButton>
    </Form>
  </AuthenticatedLayout>
</template>

<script setup>
import { Form } from "vee-validate";
import { ref, reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { notify } from "@kyvg/vue3-notification";
import { updateUser, getUser } from "@/services/users";
import Heading from "@/components/common/Heading.vue";
import FormInput from "@/components/form/FormInput.vue";
import FormButton from "@/components/form/FormButton.vue";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";

const router = useRouter();
const route = useRoute();

const form = reactive({
  name: "",
  email: "",
  role: "",
});

const schema = ref({
  name: "required",
  email: "required|email",
  role: "required",
});

const roles = [
  { id: "manager", label: "Manager" },
  { id: "member", label: "Member" },
];

onMounted(() => {
  getUser(route.params.id).then(({ data }) => {
    form.name = data.name;
    form.email = data.email;
    form.role = data.role.name;
  });
});

const submit = () => {
  updateUser(route.params.id, form).then(({ data }) => {
    notify({
      title: "User updated",
      message: "User updated successfully",
      type: "success",
    });
    router.push("/users");
  });
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
