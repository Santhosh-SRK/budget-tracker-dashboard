import { defineStore } from "pinia";

interface User {
  name: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    token: sessionStorage.getItem("token") || "",
  }),

  actions: {
    login() {
      const fakeToken = btoa(JSON.stringify({ user: "santhosh" }));

      this.token = fakeToken;
      this.user = { name: "Santhosh" };

      sessionStorage.setItem("token", fakeToken);
    },

    logout() {
      this.token = "";
      this.user = null;

      sessionStorage.removeItem("token");
    },
  },
});