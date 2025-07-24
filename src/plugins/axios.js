import axios from "axios";
import router from "@/router";
import { useAuthStore } from '@/stores/auth'
import { notify } from "@kyvg/vue3-notification";

const authStore = useAuthStore()

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});


axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  }
);

axiosClient.interceptors.response.use(
  (data) => {
    return Promise.resolve(data);
  },
  (error) => {
    handleException(error)
    return Promise.reject(error);
  }
);


const handleException = (error) => {
  let detail = ''
  let { status } = error.response

  if (status == 401) {
    detail = error.response.data.message;
    // authStore.clearUserData()
    // router.push('/auth/login')
  }
  else if (status == 500) {
    detail = 'Something went wrong'
  }
  else {
    detail = error.response.data.message;
  }

  notify({
    type: 'error',
    title: 'Error',
    text: detail
  })
}

export default axiosClient;
