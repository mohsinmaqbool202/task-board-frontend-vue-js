import axiosClient from "@/plugins/axios";

export async function register(payload) {
    const response = await axiosClient.post('/auth/register', payload)
    return response.data
}

export async function verifyEmail(payload) {
    const response = await axiosClient.post('/auth/verify-email', payload)
    return response.data
}

export async function login(payload) {
  const response = await axiosClient.post('/auth/login', payload)
  return response.data
}

export async function sendResetLink(payload) {
  const response = await axiosClient.post('/auth/forgot-password', payload)
  return response.data
}

export async function resetPassword(payload) {
  const response = await axiosClient.post('/auth/set-password', payload)
  return response.data
}

