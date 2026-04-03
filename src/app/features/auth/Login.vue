<template>
  <div class="h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-2xl shadow-md w-80">
      <h2 class="text-xl font-semibold mb-6 text-center">Login</h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <!-- Username -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Username</label>
          <input
            v-model="username"
            placeholder="Username"
            type="text"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block text-sm text-gray-600 mb-1">Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 cursor-pointer transition"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/authStore";

const router = useRouter();
const auth = useAuthStore();

// ✅ default values
const username = ref("santhosh");
const password = ref("123456");

const handleLogin = () => {
  // simple validation (optional)
  console.log("enter");
  if (!username.value || !password.value) return;

  auth.login();
  router.push("/dashboard");
};
</script>