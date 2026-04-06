<template>
  <div class="h-screen bg-gray-100">

    <!-- Sidebar -->
    <aside
      :class="[
        'fixed top-0 left-0 h-full w-64 bg-white border-r z-50 transition-transform duration-300',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      ]"
    >
      <Sidebar />
    </aside>

    <!-- Overlay (mobile only) -->
    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 bg-black/30 z-40 md:hidden"
    ></div>

    <!-- Content -->
    <div
      :class="[
        'flex flex-col h-full transition-all duration-300',
        isOpen ? 'md:ml-64 ml-0' : 'ml-0'
      ]"
    >
      <Topbar @toggle="toggleSidebar" />

      <main class="p-6 overflow-auto flex-1">
        <router-view />
      </main>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "./Sidebar.vue";
import Topbar from "./Topbar.vue";

const isOpen = ref(true);

const toggleSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>