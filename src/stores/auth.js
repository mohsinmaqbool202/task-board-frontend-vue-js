import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com`
  }),
  actions: {
    setUserData(data) {
      this.token = data.access_token
      this.user = data.user

      localStorage.setItem('token', this.token)
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    setUpdatedUserData(data) {
      this.user = data
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    clearUserData() {
      this.token = null
      this.user = null
      localStorage.clear()
    }
  }
});

