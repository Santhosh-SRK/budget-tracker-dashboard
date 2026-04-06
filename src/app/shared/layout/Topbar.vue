<template>
<div class="bg-white border-b px-4 md:px-6 py-4 flex justify-between items-center relative z-50">
    <div class="flex items-center gap-3">
      <button
        @click="$emit('toggle')"
        class="text-xl cursor-pointer"
      >
        ☰
      </button>

      <!-- <h2 class="font-semibold text-lg">Dashboard</h2> -->
    </div>

    <button
      @click="handleLogout"
      class="text-sm text-red-500 hover:text-red-600 cursor-pointer"
    >
      Logout
    </button>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useAuthStore } from "../../store/authStore";

const router = useRouter();
const auth = useAuthStore();

const handleLogout = () => {
  auth.logout();        // clear session
  router.push("/");     // go to login
};
</script>