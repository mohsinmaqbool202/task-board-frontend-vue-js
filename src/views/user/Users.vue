<template>
  <AuthenticatedLayout>
    <ConfirmationModal
      :visible="showModal"
      title="Delete User"
      :message="`Are you sure you want to delete ${userToDelete?.name || 'this user'}?`"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    />
    <Heading
      title="Users"
      :showButton="true"
      buttonRoute="/users/create"
      buttonText="Add User"
      buttonColor="#2563eb"
    />
    <Table :columns="columns" :data="users">
      <template #actions="{ row }">
        <FormButton
          variant="outlined"
          color="primary"
          @click.stop="handleEdit(row)"
        >
          Edit
        </FormButton>
        <FormButton
          variant="outlined"
          color="danger"
          @click.stop="handleDelete(row)"
        >
          Delete
        </FormButton>
        <FormButton
          v-if="!row.password"
          variant="outlined"
          color="primary"
          @click.stop="handleInvite(row)"
        >
          Invite
        </FormButton>
      </template>
    </Table>
  </AuthenticatedLayout>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Table from "@/components/common/Table.vue";
import { notify } from "@kyvg/vue3-notification";
import Heading from "@/components/common/Heading.vue";
import { getUsers, deleteUser, sendInvite } from "@/services/users";
import FormButton from "@/components/form/FormButton.vue";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout.vue";
import ConfirmationModal from "@/components/common/ConfirmationModal.vue";

const router = useRouter();
const showModal = ref(false);
const selectedUser = ref(null);
const userToDelete = ref(null);


const users = ref([]);
const columns = [
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "role", label: "Role" },
];

onMounted(async () => {
  loadData();
});

async function loadData() {
  await getUsers().then((response) => {
    users.value = formatUsersData(response.data);
  });
}

function formatUsersData(data) {
  return data.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role.name,
      password: user.password,
    };
  });
}

function handleEdit(user) {
  router.push(`/users/${user.id}/edit`);
}

function handleDelete(user) {
  userToDelete.value = user;
  showModal.value = true;
}

async function handleInvite(user) {
  await sendInvite(user.id).then(() => {
    notify({
      title: "Invite Sent",
      text: "Invite sent to user successfully",
      type: "success",
    });
  });
}

async function confirmDelete() {
  await deleteUser(userToDelete.value.id).then(() => {
    loadData();
    showModal.value = false;
    userToDelete.value = null;
  });
}

function cancelDelete() {
  showModal.value = false;
  userToDelete.value = null;
}
</script>

<style scoped>
</style>