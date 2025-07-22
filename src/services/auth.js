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