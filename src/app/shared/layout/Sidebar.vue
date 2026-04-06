

<template>
  <div class="p-4 space-y-6">

    <h1 class="text-xl font-semibold">Budget Tracker</h1>

    <nav class="space-y-2">
      <RouterLink @click="handleNav" to="/dashboard" class="block p-2 rounded hover:bg-gray-100">
        Dashboard
      </RouterLink>

      <RouterLink @click="handleNav" to="/dashboard/transactions" class="block p-2 rounded hover:bg-gray-100">
        Transactions
      </RouterLink>

      <RouterLink @click="handleNav" to="/dashboard/analytics" class="block p-2 rounded hover:bg-gray-100">
        Analytics
      </RouterLink>
    </nav>

  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleNav = () => {
  if (window.innerWidth < 768) {
    window.dispatchEvent(new CustomEvent("close-sidebar"));
  }
};
</script>