import axiosClient from "@/plugins/axios";

export async function getUsers() {
    const response = await axiosClient.get('/users')
    return response.data
}

export async function createUser(user) {
    const response = await axiosClient.post('/users', user)
    return response.data
}

export async function updateUser(id, user) {
    const response = await axiosClient.patch(`/users/${id}`, user)
    return response.data
}

export async function getUser(id) {
    const response = await axiosClient.get(`/users/${id}`)
    return response.data
}

export async function deleteUser(id) {
    const response = await axiosClient.delete(`/users/${id}`)
    return response.data
}

export async function sendInvite(id) {
    const response = await axiosClient.post(`/users/${id}/invite`)
    return response.data
}


